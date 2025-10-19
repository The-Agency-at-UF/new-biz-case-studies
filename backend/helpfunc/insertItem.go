package helpfunc

import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
)

// --- Data models ---
type Company struct {
	CompanyID   string   `dynamodbav:"CompanyID"`
	Name        string   `dynamodbav:"Name"`
	Industry    string   `dynamodbav:"Industry"`
	CaseStudies []string `dynamodbav:"CaseStudies"`
}

type CaseStudy struct {
	CompanyID  string      `dynamodbav:"CompanyID"`
	TemplateID string      `dynamodbav:"TemplateID"`
	Blocks     interface{} `dynamodbav:"Blocks"` // can be []map[string]interface{}
}

// --- Insert functions ---
func InsertCompany(item Company) error {
	client := GetDynamoClient()

	av, err := attributevalue.MarshalMap(item)
	if err != nil {
		return fmt.Errorf("failed to marshal company: %v", err)
	}

	_, err = client.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String("Companies"),
		Item:      av,
	})
	if err != nil {
		return fmt.Errorf("failed to insert company: %v", err)
	}

	fmt.Println("Company inserted successfully:", item.CompanyID)
	return nil
}

func InsertCaseStudy(item CaseStudy) error {
	client := GetDynamoClient()

	av, err := attributevalue.MarshalMap(item)
	if err != nil {
		return fmt.Errorf("failed to marshal case study: %v", err)
	}

	_, err = client.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String("CaseStudies"),
		Item:      av,
	})
	if err != nil {
		return fmt.Errorf("failed to insert case study: %v", err)
	}

	fmt.Println("Case study inserted successfully:", item.TemplateID)
	return nil
}
