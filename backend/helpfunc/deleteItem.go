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

	queryInput := &dynamodb.QueryInput{
		TableName:              aws.String("CaseStudies"),
		KeyConditionExpression: aws.String("CompanyID = :cid"),
		ExpressionAttributeValues: map[string]types.AttributeValue{
			":cid": &types.AttributeValueMemberS{Value: companyID},
		},
	}

	out, err := client.Query(context.TODO(), queryInput)
	if err != nil {
		return fmt.Errorf("failed to query case studies for company %s: %v", companyID, err)
	}

	for _, item := range out.Items {
		var cs CaseStudy
		if err := attributevalue.UnmarshalMap(item, &cs); err != nil {
			fmt.Printf("warning: failed to unmarshal case study for company %s: %v\n", companyID, err)
			continue
		}

		_, err = client.DeleteItem(context.TODO(), &dynamodb.DeleteItemInput{
			TableName: aws.String("CaseStudies"),
			Key: map[string]types.AttributeValue{
				"CompanyID":  &types.AttributeValueMemberS{Value: cs.CompanyID},
				"TemplateID": &types.AttributeValueMemberS{Value: cs.TemplateID},
			},
		})
		if err != nil {
			fmt.Printf("warning: failed to delete case study %s for company %s: %v\n", cs.TemplateID, companyID, err)
		} else {
			fmt.Printf("Deleted case study %s for company %s\n", cs.TemplateID, companyID)
		}
	}


	key, err := attributevalue.MarshalMap(map[string]string{
		"CompanyID": companyID,
	})
	if err != nil {
		return fmt.Errorf("failed to marshal delete key: %v", err)
	}

	_, err = client.DeleteItem(context.TODO(), &dynamodb.DeleteItemInput{
		TableName: aws.String("Companies"),
		Key:       key,
	})
	if err != nil {
		return fmt.Errorf("failed to delete company: %v", err)
	}

	fmt.Println("Company deleted successfully:", companyID)
	return nil
}


func DeleteCaseStudy(companyID string, templateID string) error {
	client := GetDynamoClient()

	fmt.Println("Starting DeleteCaseStudy for", companyID, templateID)

	
	key, err := attributevalue.MarshalMap(map[string]string{
		"CompanyID":  companyID,
		"TemplateID": templateID,
	})
	if err != nil {
		return fmt.Errorf("failed to marshal delete key: %v", err)
	}

	_, err = client.DeleteItem(context.TODO(), &dynamodb.DeleteItemInput{
		TableName: aws.String("CaseStudies"),
		Key:       key,
	})
	if err != nil {
		return fmt.Errorf("failed to delete case study: %v", err)
	}

	fmt.Println("Case study deleted from CaseStudies table")

	out, err := client.GetItem(context.TODO(), &dynamodb.GetItemInput{
		TableName: aws.String("Companies"),
		Key: map[string]types.AttributeValue{
			"CompanyID": &types.AttributeValueMemberS{Value: companyID},
		},
	})
	if err != nil {
		return fmt.Errorf("failed to get company: %v", err)
	}

	if out.Item == nil {
		return fmt.Errorf("company %s not found", companyID)
	}

	var company Company
	if err := attributevalue.UnmarshalMap(out.Item, &company); err != nil {
		return fmt.Errorf("failed to unmarshal company: %v", err)
	}

	filtered := []string{}
	for _, id := range company.CaseStudies {
		if id != templateID {
			filtered = append(filtered, id)
		}
	}

	_, err = client.UpdateItem(context.TODO(), &dynamodb.UpdateItemInput{
		TableName: aws.String("Companies"),
		Key: map[string]types.AttributeValue{
			"CompanyID": &types.AttributeValueMemberS{Value: companyID},
		},
		UpdateExpression: aws.String("SET CaseStudies = :newlist"),
		ExpressionAttributeValues: map[string]types.AttributeValue{
			":newlist": &types.AttributeValueMemberL{Value: convertToAttributeValueList(filtered)},
		},
	})
	if err != nil {
		return fmt.Errorf("failed to update company CaseStudies list: %v", err)
	}

	fmt.Println("Company CaseStudies list updated successfully")
	return nil
}
