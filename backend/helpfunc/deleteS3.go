package helpfunc

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func (s *S3) DeleteImageFromS3(ctx context.Context, bucket, key string) error {
	input := &s3.DeleteObjectInput{
		Bucket: &bucket,
		Key:    &key,
	}

	_, err := s.Client.DeleteObject(ctx, input)
	if err != nil {
		return fmt.Errorf("failed to delete object %s from bucket %s: %w", key, bucket, err)
	}

	return nil
}
