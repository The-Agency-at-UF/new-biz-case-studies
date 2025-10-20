package helpfunc

import (
	"bytes"
	"context"
	"fmt"
	"mime"
	"os"
	"path/filepath"

	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func (s *S3) UploadFile(ctx context.Context, bucket, key, localPath string) (location string, err error) {
	f, err := os.Open(localPath)
	if err != nil {
		return "", fmt.Errorf("open %s: %w", localPath, err)
	}
	defer f.Close()

	ct := "application/octet-stream"
	if ext := filepath.Ext(localPath); ext != "" {
		if g := mime.TypeByExtension(ext); g != "" {
			ct = g
		}
	}

	out, err := s.Uploader.Upload(ctx, &s3.PutObjectInput{
		Bucket:      &bucket,
		Key:         &key,
		Body:        f,
		ContentType: &ct,
	})
	if err != nil {
		return "", fmt.Errorf("s3 upload: %w", err)
	}
	return out.Location, nil
}

func (s *S3) PutBytes(ctx context.Context, bucket, key string, b []byte, contentType string) error {
	if contentType == "" {
		contentType = "application/octet-stream"
	}
	_, err := s.Client.PutObject(ctx, &s3.PutObjectInput{
		Bucket:      &bucket,
		Key:         &key,
		Body:        bytes.NewReader(b),
		ContentType: &contentType,
	})
	if err != nil {
		return fmt.Errorf("s3 put bytes: %w", err)
	}
	return nil
}
