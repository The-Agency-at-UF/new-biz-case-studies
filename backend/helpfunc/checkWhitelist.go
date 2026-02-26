package helpfunc

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

// CheckIfEmailWhitelisted checks if an email exists in the WhitelistedEmails table.
func CheckIfEmailWhitelisted(email string) (bool, error) {
	dbClient := GetDynamoClient()
	if dbClient == nil {
		return false, fmt.Errorf("DynamoDB client not initialized")
	}

	input := &dynamodb.GetItemInput{
		TableName: aws.String("WhitelistedEmails"),
		Key: map[string]types.AttributeValue{
			"Email": &types.AttributeValueMemberS{Value: email},
		},
	}

	result, err := dbClient.GetItem(context.TODO(), input)
	if err != nil {
		return false, fmt.Errorf("failed to get item from WhitelistedEmails table: %v", err)
	}

	return result.Item != nil && len(result.Item) > 0, nil
}
