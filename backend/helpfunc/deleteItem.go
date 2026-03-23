package helpfunc

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

func convertToAttributeValueList(ids []string) []types.AttributeValue {
	list := make([]types.AttributeValue, len(ids))
	for i, id := range ids {
		list[i] = &types.AttributeValueMemberS{Value: id}
	}
	return list
}

func DeleteCompany(companyID string) error {
	client := GetDynamoClient()

	_, err := client.DeleteItem(context.TODO(), &dynamodb.DeleteItemInput{
		TableName: aws.String("Companies"),
		Key: map[string]types.AttributeValue{
			"CompanyID": &types.AttributeValueMemberS{Value: companyID},
		},
	})
	if err != nil {
		return fmt.Errorf("failed to delete company: %v", err)
	}

	fmt.Println("Company deleted successfully:", companyID)
	return nil
}

func DeleteCaseStudy(caseStudyID string) error {
	client := GetDynamoClient()

	// Delete from CaseStudies table
	_, err := client.DeleteItem(context.TODO(), &dynamodb.DeleteItemInput{
		TableName: aws.String("CaseStudies"),
		Key: map[string]types.AttributeValue{
			"CaseStudyID": &types.AttributeValueMemberS{Value: caseStudyID},
		},
	})
	if err != nil {
		return fmt.Errorf("failed to delete case study: %v", err)
	}
	fmt.Println("Case study deleted from CaseStudies table:", caseStudyID)

	// Scan all companies and remove this caseStudyID from any CaseStudies list that contains it
	out, err := client.Scan(context.TODO(), &dynamodb.ScanInput{
		TableName: aws.String("Companies"),
	})
	if err != nil {
		return fmt.Errorf("failed to scan companies: %v", err)
	}

	var companies []Company
	if err := attributevalue.UnmarshalListOfMaps(out.Items, &companies); err != nil {
		return fmt.Errorf("failed to unmarshal companies: %v", err)
	}

	for _, company := range companies {
		// Check if this company references the deleted case study
		found := false
		filtered := []string{}
		for _, id := range company.CaseStudies {
			if id == caseStudyID {
				found = true
			} else {
				filtered = append(filtered, id)
			}
		}

		if !found {
			continue
		}

		// Update the company's CaseStudies list
		_, err = client.UpdateItem(context.TODO(), &dynamodb.UpdateItemInput{
			TableName: aws.String("Companies"),
			Key: map[string]types.AttributeValue{
				"CompanyID": &types.AttributeValueMemberS{Value: company.CompanyID},
			},
			UpdateExpression: aws.String("SET CaseStudies = :newlist"),
			ExpressionAttributeValues: map[string]types.AttributeValue{
				":newlist": &types.AttributeValueMemberL{Value: convertToAttributeValueList(filtered)},
			},
		})
		if err != nil {
			fmt.Printf("warning: failed to update CaseStudies list for company %s: %v\n", company.CompanyID, err)
		} else {
			fmt.Printf("Removed case study %s from company %s\n", caseStudyID, company.CompanyID)
		}
	}

	return nil
}
