package helpfunc

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

// CompanyWithStudies is a nested view of a company and its case studies
type CompanyWithStudies struct {
	CompanyID   string      `json:"CompanyID"`
	Name        string      `json:"Name"`
	Industry    string      `json:"Industry"`
	CaseStudies []CaseStudy `json:"CaseStudies"`
}

// GetAllCompaniesWithCaseStudies returns every company with its related case studies
func GetAllCompaniesWithCaseStudies() ([]CompanyWithStudies, error) {
	client := GetDynamoClient()

	out, err := client.Scan(context.TODO(), &dynamodb.ScanInput{
		TableName: aws.String("Companies"),
	})
	if err != nil {
		return nil, fmt.Errorf("failed to scan Companies table: %v", err)
	}

	var companies []Company
	if err := attributevalue.UnmarshalListOfMaps(out.Items, &companies); err != nil {
		return nil, fmt.Errorf("failed to unmarshal companies: %v", err)
	}

	var fullData []CompanyWithStudies
	for _, comp := range companies {
		queryInput := &dynamodb.QueryInput{
			TableName:              aws.String("CaseStudies"),
			KeyConditionExpression: aws.String("CompanyID = :cid"),
			ExpressionAttributeValues: map[string]types.AttributeValue{
				":cid": &types.AttributeValueMemberS{Value: comp.CompanyID},
			},
		}

		caseOut, err := client.Query(context.TODO(), queryInput)
		if err != nil {
			fmt.Printf("warning: failed to get case studies for company %s: %v\n", comp.CompanyID, err)
			continue
		}

		var studies []CaseStudy
		if err := attributevalue.UnmarshalListOfMaps(caseOut.Items, &studies); err != nil {
			fmt.Printf("warning: failed to unmarshal case studies for company %s: %v\n", comp.CompanyID, err)
		}

		fullData = append(fullData, CompanyWithStudies{
			CompanyID:   comp.CompanyID,
			Name:        comp.Name,
			Industry:    comp.Industry,
			CaseStudies: studies,
		})
	}

	return fullData, nil
}
