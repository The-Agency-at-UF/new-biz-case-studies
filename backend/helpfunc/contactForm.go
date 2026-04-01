package helpfunc

import (
	"context"
	"net/http"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// --- DATA MODEL ---
type ContactRequest struct {
	ContactID    string `json:"contactID" dynamodbav:"ContactID"`
	Name         string `json:"name" dynamodbav:"Name"`
	Organization string `json:"organization" dynamodbav:"Organization"`
	Email        string `json:"email" dynamodbav:"Email"`
	Role         string `json:"role" dynamodbav:"Role"`
	Type         string `json:"type" dynamodbav:"Type"`
	CreatedAt    string `json:"createdAt" dynamodbav:"CreatedAt"`
}

// --- DB INSERT ---
func InsertContact(item ContactRequest) error {
	client := GetDynamoClient()

	av, err := attributevalue.MarshalMap(item)
	if err != nil {
		return err
	}

	_, err = client.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String("Contacts"),
		Item:      av,
	})

	return err
}

// --- HANDLER ---
func ContactHandler(c *gin.Context) {
	var req ContactRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	if req.Name == "" || req.Email == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Name and email are required",
		})
		return
	}

	req.ContactID = uuid.New().String()
	req.CreatedAt = time.Now().Format(time.RFC3339)

	if err := InsertContact(req); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to save contact",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Contact submitted successfully",
	})
}
