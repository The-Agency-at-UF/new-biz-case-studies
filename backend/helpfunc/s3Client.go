package helpfunc

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/s3/manager"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)


type S3 struct {
	Client   *s3.Client
	Uploader *manager.Uploader
}

func NewS3(ctx context.Context) (*S3, error) {
	cfg, err := config.LoadDefaultConfig(ctx)
	if err != nil {
		return nil, fmt.Errorf("load AWS config: %w", err)
	}

	client := s3.NewFromConfig(cfg)
	return &S3{
		Client:   client,
		Uploader: manager.NewUploader(client),
	}, nil
}
