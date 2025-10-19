package helpfunc

import (
	"context"
	"log"
	"os"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/joho/godotenv"
)

var dbClient *dynamodb.Client

// InitDynamo loads environment variables and initializes the DynamoDB client
func InitDynamo() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: .env file not found — relying on system environment variables")
	}

	region := os.Getenv("AWS_REGION")
	accessKey := os.Getenv("AWS_ACCESS_KEY_ID")
	secretKey := os.Getenv("AWS_SECRET_ACCESS_KEY")
	sessionToken := os.Getenv("AWS_SESSION_TOKEN")

	if region == "" || accessKey == "" || secretKey == "" {
		log.Fatalf("Missing required AWS environment variables. Check your .env file.")
	}

	// Create AWS config
	cfg, err := config.LoadDefaultConfig(context.TODO(),
		config.WithRegion(region),
		config.WithCredentialsProvider(
			credentials.NewStaticCredentialsProvider(accessKey, secretKey, sessionToken),
		),
	)
	if err != nil {
		log.Fatalf("Failed to load AWS config: %v", err)
	}

	dbClient = dynamodb.NewFromConfig(cfg)
	log.Println("DynamoDB client initialized with region:", region)
}

// GetDynamoClient returns the global DynamoDB client
func GetDynamoClient() *dynamodb.Client {
	return dbClient
}
