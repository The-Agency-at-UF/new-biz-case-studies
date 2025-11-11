package main

import (
	"context"
	"fmt"
	"net/http"
	"path/filepath"
	"time"

	help "new-biz-case-studies-backend/helpfunc"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/s3/manager"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func main() {
	r := gin.Default()

	// --- Allow local frontend access (optional but recommended) ---
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET", "POST", "DELETE"},
		AllowHeaders: []string{"Origin", "Content-Type"},
	}))

	// --- Initialize DynamoDB connection ---
	help.InitDynamo()

	// --- Create tables if not existing ---
	if err := help.CreateTables(); err != nil {
		fmt.Println("Error creating tables:", err)
	} else {
		fmt.Println("Table setup complete.")
	}

	// --- Initialize S3  ---
	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		panic(err)
	}
	uploader := manager.NewUploader(s3.NewFromConfig(cfg))
	bucket := "new-biz-case-studies-bucket"

	// --- Test endpoint (health check) ---
	r.GET("/api/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Backend is up and DynamoDB tables are ready!"})
	})

	// --- Insert company test (POST /api/test-company) ---
	r.POST("/api/test-company", func(c *gin.Context) {
		testCompany := help.Company{
			CompanyID:   "COMP001",
			Name:        "Uber",
			Industry:    "Transportation & Technology",
			CaseStudies: []string{"CS001"},
		}
		err := help.InsertCompany(testCompany)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Uber inserted successfully into Companies table"})
	})

	// --- Insert case study test (POST /api/test-casestudy) ---
	r.POST("/api/test-casestudy", func(c *gin.Context) {
		testCaseStudy := help.CaseStudy{
			CompanyID:  "COMP001",
			TemplateID: "CS001",
			Blocks: []map[string]interface{}{
				{"type": "title", "content": "Reimagining Urban Mobility"},
				{"type": "paragraph", "content": "Uber revolutionized transportation by using real-time data and dynamic pricing to connect riders and drivers efficiently."},
			},
		}
		err := help.InsertCaseStudy(testCaseStudy)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Uber case study inserted successfully"})
	})

	// --- Upload image to S3 ---
	r.POST("/api/upload-image", func(c *gin.Context) {
		fh, err := c.FormFile("image")
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "missing form field 'image'"})
			return
		}
		f, err := fh.Open()
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "cannot open uploaded file"})
			return
		}
		defer f.Close()

		key := "case-studies/" + fmt.Sprintf("%d-%s", time.Now().Unix(), filepath.Base(fh.Filename))
		ct := fh.Header.Get("Content-Type")
		if ct == "" {
			ct = "application/octet-stream"
		}

		out, err := uploader.Upload(c, &s3.PutObjectInput{
			Bucket:      &bucket,
			Key:         &key,
			Body:        f,
			ContentType: aws.String(ct),
		})
		if err != nil {
			c.JSON(http.StatusBadGateway, gin.H{"error": "s3 upload failed: " + err.Error()})
			return
		}
		c.JSON(http.StatusCreated, gin.H{"key": key, "location": out.Location})
	})

	// --- Submit form endpoint (POST /api/submit-form) ---
	// Accepts JSON from the frontend form and inserts a Company and CaseStudy into DynamoDB.
	r.POST("/api/submit-form", func(c *gin.Context) {
		var formData struct {
			Title       string      `json:"title"`
			Company     string      `json:"company"`
			Tags        []string    `json:"tags"`
			CaseStudies []string    `json:"caseStudies"`
			Blocks      interface{} `json:"blocks"`
		}

		if err := c.BindJSON(&formData); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// Timestamp-based IDs; replace with UUIDs in the future if desired,
		// this can cause collisions if multiple writes happen at the same second
		ts := time.Now().Unix()
		companyID := fmt.Sprintf("COMP%v", ts)
		templateID := fmt.Sprintf("CS%v", ts)

		// Insert company record
		company := help.Company{
			CompanyID:   companyID,
			Name:        formData.Company,
			Industry:    "",
			CaseStudies: []string{templateID},
		}
		if err := help.InsertCompany(company); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		// Insert case study record
		cs := help.CaseStudy{
			CompanyID:  companyID,
			TemplateID: templateID,
			Blocks:     formData.Blocks,
		}
		if err := help.InsertCaseStudy(cs); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusCreated, gin.H{"companyID": companyID, "templateID": templateID})
	})

	// --- Run server ---
	r.Run(":8080")
}
