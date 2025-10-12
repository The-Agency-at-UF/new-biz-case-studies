package main

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

// CreateTables checks for missing tables and creates them if necessary
func CreateTables() error {
	client := GetDynamoClient()

	requiredTables := map[string]*dynamodb.CreateTableInput{
		"Companies": {
			TableName: aws.String("Companies"),
			AttributeDefinitions: []types.AttributeDefinition{
				{
					AttributeName: aws.String("CompanyID"),
					AttributeType: types.ScalarAttributeTypeS,
				},
			},
			KeySchema: []types.KeySchemaElement{
				{
					AttributeName: aws.String("CompanyID"),
					KeyType:       types.KeyTypeHash,
				},
			},
			BillingMode: types.BillingModePayPerRequest,
		},

		"CaseStudies": {
			TableName: aws.String("CaseStudies"),
			AttributeDefinitions: []types.AttributeDefinition{
				{
					AttributeName: aws.String("CompanyID"),
					AttributeType: types.ScalarAttributeTypeS,
				},
				{
					AttributeName: aws.String("TemplateID"),
					AttributeType: types.ScalarAttributeTypeS,
				},
			},
			KeySchema: []types.KeySchemaElement{
				{
					AttributeName: aws.String("CompanyID"),
					KeyType:       types.KeyTypeHash,
				},
				{
					AttributeName: aws.String("TemplateID"),
					KeyType:       types.KeyTypeRange,
				},
			},
			BillingMode: types.BillingModePayPerRequest,
		},
	}

	// Fetch existing tables
	existing, err := client.ListTables(context.TODO(), &dynamodb.ListTablesInput{})
	if err != nil {
		return fmt.Errorf("Failed to list tables: %v", err)
	}

	existingMap := make(map[string]bool)
	for _, name := range existing.TableNames {
		existingMap[name] = true
	}

	// Create any missing tables
	for name, input := range requiredTables {
		if _, ok := existingMap[name]; ok {
			fmt.Printf("Table '%s' already exists — skipping creation\n", name)
			continue
		}

		_, err := client.CreateTable(context.TODO(), input)
		if err != nil {
			return fmt.Errorf("Failed to create table %s: %v", name, err)
		}
		fmt.Printf("Created '%s' table\n", name)
	}

	fmt.Println("Table check complete — all required tables are ready.")
	return nil
}
