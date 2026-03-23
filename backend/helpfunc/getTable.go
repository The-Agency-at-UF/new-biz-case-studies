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
		var studies []CaseStudy

		for _, caseStudyID := range comp.CaseStudies {
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

		fullData = append(fullData, CompanyWithStudies{
			CompanyID:   comp.CompanyID,
			Name:        comp.Name,
			Industry:    comp.Industry,
			CaseStudies: studies,
		})
	}

	return fullData, nil
}
