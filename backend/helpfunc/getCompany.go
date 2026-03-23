package helpfunc

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

// GetCaseStudiesForCompany returns all case studies for one company ID
func GetCaseStudiesForCompany(companyID string) ([]CaseStudy, error) {
	client := GetDynamoClient()

	// First get the company to retrieve its CaseStudies list
	companyResult, err := client.GetItem(context.TODO(), &dynamodb.GetItemInput{
		TableName: aws.String("Companies"),
		Key: map[string]types.AttributeValue{
			"CompanyID": &types.AttributeValueMemberS{Value: companyID},
		},
	})
	if err != nil {
		return nil, fmt.Errorf("failed to get company %s: %v", companyID, err)
	}
	if companyResult.Item == nil {
		return nil, fmt.Errorf("company %s not found", companyID)
	}

	var company Company
	if err := attributevalue.UnmarshalMap(companyResult.Item, &company); err != nil {
		return nil, fmt.Errorf("failed to unmarshal company: %v", err)
	}

	// Then fetch each case study by ID
	var studies []CaseStudy
	for _, caseStudyID := range company.CaseStudies {
		result, err := client.GetItem(context.TODO(), &dynamodb.GetItemInput{
			TableName: aws.String("CaseStudies"),
			Key: map[string]types.AttributeValue{
				"CaseStudyID": &types.AttributeValueMemberS{Value: caseStudyID},
			},
		})
		if err != nil {
			fmt.Printf("warning: failed to get case study %s: %v\n", caseStudyID, err)
			continue
		}
		if result.Item == nil {
			fmt.Printf("warning: case study %s not found\n", caseStudyID)
			continue
		}

		var study CaseStudy
		if err := attributevalue.UnmarshalMap(result.Item, &study); err != nil {
			fmt.Printf("warning: failed to unmarshal case study %s: %v\n", caseStudyID, err)
			continue
		}
		studies = append(studies, study)
	}

	return studies, nil
}
