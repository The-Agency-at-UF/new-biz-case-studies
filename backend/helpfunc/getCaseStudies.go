package helpfunc

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
)

func GetCaseStudies() ([]CaseStudy, error) {
	client := GetDynamoClient()

	// Scan the entire CaseStudies table
	out, err := client.Scan(context.TODO(), &dynamodb.ScanInput{
		TableName: aws.String("CaseStudies"),
	})
	if err != nil {
		return nil, fmt.Errorf("failed to scan case studies: %v", err)
	}

	// Convert DynamoDB items → Go structs
	var caseStudies []CaseStudy
	err = attributevalue.UnmarshalListOfMaps(out.Items, &caseStudies)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal case studies: %v", err)
	}

	return caseStudies, nil
}
