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

	queryInput := &dynamodb.QueryInput{
		TableName:              aws.String("CaseStudies"),
		KeyConditionExpression: aws.String("CompanyID = :cid"),
		ExpressionAttributeValues: map[string]types.AttributeValue{
			":cid": &types.AttributeValueMemberS{Value: companyID},
		},
	}

	out, err := client.Query(context.TODO(), queryInput)
	if err != nil {
		return nil, fmt.Errorf("failed to query case studies for company %s: %v", companyID, err)
	}

	var studies []CaseStudy
	if err := attributevalue.UnmarshalListOfMaps(out.Items, &studies); err != nil {
		return nil, fmt.Errorf("failed to unmarshal case studies: %v", err)
	}

	return studies, nil
}
