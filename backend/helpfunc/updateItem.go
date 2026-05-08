package helpfunc

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

func UpdateCompany(companyID string, name string, industry string, caseStudies []string) error {
	client := GetDynamoClient()

	caseStudiesAV, err := attributevalue.Marshal(caseStudies)
	if err != nil {
		return fmt.Errorf("failed to marshal case studies: %v", err)
	}

	_, err = client.UpdateItem(context.TODO(), &dynamodb.UpdateItemInput{
		TableName: aws.String("Companies"),
		Key: map[string]types.AttributeValue{
			"CompanyID": &types.AttributeValueMemberS{Value: companyID},
		},
		UpdateExpression: aws.String("SET #n = :name, Industry = :industry, CaseStudies = :caseStudies"),
		ExpressionAttributeNames: map[string]string{
			"#n": "Name",
		},
		ExpressionAttributeValues: map[string]types.AttributeValue{
			":name":        &types.AttributeValueMemberS{Value: name},
			":industry":    &types.AttributeValueMemberS{Value: industry},
			":caseStudies": caseStudiesAV,
		},
	})
	if err != nil {
		return fmt.Errorf("failed to update company: %v", err)
	}
	return nil
}

func UpdateCaseStudy(caseStudyID string, name string, tags []string, description string) error {
	client := GetDynamoClient()

	tagsAV, err := attributevalue.Marshal(tags)
	if err != nil {
		return fmt.Errorf("failed to marshal tags: %v", err)
	}

	_, err = client.UpdateItem(context.TODO(), &dynamodb.UpdateItemInput{
		TableName: aws.String("CaseStudies"),
		Key: map[string]types.AttributeValue{
			"CaseStudyID": &types.AttributeValueMemberS{Value: caseStudyID},
		},
		UpdateExpression: aws.String("SET #n = :name, Tags = :tags, Description = :description"),
		ExpressionAttributeNames: map[string]string{
			"#n": "Name",
		},
		ExpressionAttributeValues: map[string]types.AttributeValue{
			":name":        &types.AttributeValueMemberS{Value: name},
			":tags":        tagsAV,
			":description": &types.AttributeValueMemberS{Value: description},
		},
	})
	if err != nil {
		return fmt.Errorf("failed to update case study: %v", err)
	}
	return nil
}

func UpdateCaseStudyTags(caseStudyID string, tags []string) error {
	client := GetDynamoClient()

	tagsAV, err := attributevalue.Marshal(tags)
	if err != nil {
		return fmt.Errorf("failed to marshal tags: %v", err)
	}

	_, err = client.UpdateItem(context.TODO(), &dynamodb.UpdateItemInput{
		TableName: aws.String("CaseStudies"),
		Key: map[string]types.AttributeValue{
			"CaseStudyID": &types.AttributeValueMemberS{Value: caseStudyID},
		},
		UpdateExpression: aws.String("SET Tags = :tags"),
		ExpressionAttributeValues: map[string]types.AttributeValue{
			":tags": tagsAV,
		},
	})
	if err != nil {
		return fmt.Errorf("failed to update case study tags: %v", err)
	}
	return nil
}
