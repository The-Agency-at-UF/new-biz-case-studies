# Seeding Mock Data

This guide shows how to populate the database with mock data for Amazon, Uber, and Google.

## What Gets Seeded

The mock data includes:

### Amazon (amazon-001)
- **Industry**: E-commerce & Cloud Computing
- **Case Studies**: 2
  1. Amazon Prime Rebranding Campaign
  2. AWS Developer Portal Redesign

### Uber (uber-001)
- **Industry**: Transportation & Logistics
- **Case Studies**: 2
  1. Uber Eats Brand Identity Refresh
  2. Driver App Accessibility Enhancement

### Google (google-001)
- **Industry**: Technology & Software
- **Case Studies**: 3
  1. Google Workspace Marketing Campaign
  2. Google Cloud Platform Documentation
  3. Google Fi Mobile App Redesign

## How to Seed the Data

### Option 1: Using curl (Recommended)

1. Make sure your backend server is running:
   ```bash
   cd backend
   go run main.go
   ```

2. In a new terminal, run:
   ```bash
   curl -X POST http://localhost:8080/api/seed-mock-data
   ```

### Option 2: Using PowerShell

```powershell
Invoke-WebRequest -Uri "http://localhost:8080/api/seed-mock-data" -Method POST
```

### Option 3: Using a REST client

- **URL**: `http://localhost:8080/api/seed-mock-data`
- **Method**: POST
- **Headers**: None required

## Expected Response

```json
{
  "message": "Mock data for Amazon, Uber, and Google seeded successfully!"
}
```

## Verifying the Data

After seeding, you can verify the data by:

1. Visiting the overview endpoint:
   ```bash
   curl http://localhost:8080/api/overview
   ```

2. Or visiting your frontend at `http://localhost:3000/portfolio`

## Notes

- The seed endpoint can be called multiple times. It will overwrite existing data with the same CompanyIDs.
- Each company has a unique CompanyID (amazon-001, uber-001, google-001)
- Case studies are properly linked to their respective companies
