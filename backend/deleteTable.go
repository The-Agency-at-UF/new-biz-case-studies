package main

import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
)

// DeleteTable deletes a DynamoDB table by name
func DeleteTable(tableName string) error {
	client := GetDynamoClient()

	// Delete the table
	_, err := client.DeleteTable(context.TODO(), &dynamodb.DeleteTableInput{
		TableName: aws.String(tableName),
	})
	if err != nil {
		return fmt.Errorf("failed to delete table %s: %v", tableName, err)
	}

	fmt.Printf("Table '%s' deleted successfully\n", tableName)
	return nil
}
