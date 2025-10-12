package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
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
	InitDynamo()

	// --- Create tables if not existing ---
	if err := CreateTables(); err != nil {
		fmt.Println("Error creating tables:", err)
	} else {
		fmt.Println("Table setup complete.")
	}

	// --- Test endpoint (health check) ---
	r.GET("/api/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Backend is up and DynamoDB tables are ready!"})
	})

	// --- Insert company test (POST /api/test-company) ---
	r.POST("/api/test-company", func(c *gin.Context) {
		testCompany := Company{
			CompanyID:   "COMP001",
			Name:        "Uber",
			Industry:    "Transportation & Technology",
			CaseStudies: []string{"CS001"},
		}
		err := InsertCompany(testCompany)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Uber inserted successfully into Companies table"})
	})

	// --- Insert case study test (POST /api/test-casestudy) ---
	r.POST("/api/test-casestudy", func(c *gin.Context) {
		testCaseStudy := CaseStudy{
			CompanyID:  "COMP001",
			TemplateID: "CS001",
			Blocks: []map[string]interface{}{
				{"type": "title", "content": "Reimagining Urban Mobility"},
				{"type": "paragraph", "content": "Uber revolutionized transportation by using real-time data and dynamic pricing to connect riders and drivers efficiently."},
			},
		}
		err := InsertCaseStudy(testCaseStudy)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Uber case study inserted successfully"})
	})

	// --- Run server ---
	r.Run(":8080")
}

