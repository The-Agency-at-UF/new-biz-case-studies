package helpfunc

import "fmt"

// SeedMockData inserts mock data for Amazon, Uber, and Google
func SeedMockData() error {
	// Create Amazon
	amazon := Company{
		CompanyID:   "amazon-001",
		Name:        "Amazon",
		Industry:    "E-commerce & Cloud Computing",
		CaseStudies: []string{"amazon-001_template-1", "amazon-001_template-2"},
	}
	if err := InsertCompany(amazon); err != nil {
		return fmt.Errorf("failed to insert Amazon: %v", err)
	}

	// Amazon Case Study 1
	amazonCS1 := CaseStudy{
		CompanyID:  "amazon-001",
		TemplateID: "template-1",
		Blocks: []map[string]interface{}{
			{
				"type":    "header",
				"content": "Amazon Prime Rebranding Campaign",
			},
			{
				"type":    "text",
				"content": "The Agency partnered with Amazon to redesign and rebrand their Prime membership experience, focusing on enhanced user engagement and retention.",
			},
			{
				"type":    "image",
				"content": "/images/amazon-prime-mockup.jpg",
			},
			{
				"type":    "text",
				"content": "Our team developed a comprehensive branding strategy that increased Prime sign-ups by 35% over six months.",
			},
		},
	}
	if err := InsertCaseStudy(amazonCS1); err != nil {
		return fmt.Errorf("failed to insert Amazon case study 1: %v", err)
	}

	// Amazon Case Study 2
	amazonCS2 := CaseStudy{
		CompanyID:  "amazon-001",
		TemplateID: "template-2",
		Blocks: []map[string]interface{}{
			{
				"type":    "header",
				"content": "AWS Developer Portal Redesign",
			},
			{
				"type":    "text",
				"content": "Complete UX/UI overhaul of the AWS developer documentation portal to improve developer experience and reduce onboarding time.",
			},
			{
				"type":    "metrics",
				"content": "45% reduction in support tickets, 60% faster developer onboarding",
			},
		},
	}
	if err := InsertCaseStudy(amazonCS2); err != nil {
		return fmt.Errorf("failed to insert Amazon case study 2: %v", err)
	}

	// Create Uber
	uber := Company{
		CompanyID:   "uber-001",
		Name:        "Uber",
		Industry:    "Transportation & Logistics",
		CaseStudies: []string{"uber-001_template-1", "uber-001_template-2"},
	}
	if err := InsertCompany(uber); err != nil {
		return fmt.Errorf("failed to insert Uber: %v", err)
	}

	// Uber Case Study 1
	uberCS1 := CaseStudy{
		CompanyID:  "uber-001",
		TemplateID: "template-1",
		Blocks: []map[string]interface{}{
			{
				"type":    "header",
				"content": "Uber Eats Brand Identity Refresh",
			},
			{
				"type":    "text",
				"content": "Developed a new visual identity for Uber Eats that differentiates it from the main Uber brand while maintaining cohesive brand recognition.",
			},
			{
				"type":    "image",
				"content": "/images/uber-eats-branding.jpg",
			},
			{
				"type":    "text",
				"content": "The new identity led to a 28% increase in brand recognition and improved customer sentiment.",
			},
		},
	}
	if err := InsertCaseStudy(uberCS1); err != nil {
		return fmt.Errorf("failed to insert Uber case study 1: %v", err)
	}

	// Uber Case Study 2
	uberCS2 := CaseStudy{
		CompanyID:  "uber-001",
		TemplateID: "template-2",
		Blocks: []map[string]interface{}{
			{
				"type":    "header",
				"content": "Driver App Accessibility Enhancement",
			},
			{
				"type":    "text",
				"content": "Comprehensive accessibility audit and redesign of the Uber driver app to ensure WCAG 2.1 AA compliance.",
			},
			{
				"type":    "metrics",
				"content": "100% WCAG compliance, 22% increase in driver satisfaction scores",
			},
		},
	}
	if err := InsertCaseStudy(uberCS2); err != nil {
		return fmt.Errorf("failed to insert Uber case study 2: %v", err)
	}

	// Create Google
	google := Company{
		CompanyID:   "google-001",
		Name:        "Google",
		Industry:    "Technology & Software",
		CaseStudies: []string{"google-001_template-1", "google-001_template-2", "google-001_template-3"},
	}
	if err := InsertCompany(google); err != nil {
		return fmt.Errorf("failed to insert Google: %v", err)
	}

	// Google Case Study 1
	googleCS1 := CaseStudy{
		CompanyID:  "google-001",
		TemplateID: "template-1",
		Blocks: []map[string]interface{}{
			{
				"type":    "header",
				"content": "Google Workspace Marketing Campaign",
			},
			{
				"type":    "text",
				"content": "Multi-channel marketing campaign targeting enterprise clients to drive Google Workspace adoption.",
			},
			{
				"type":    "image",
				"content": "/images/google-workspace-campaign.jpg",
			},
			{
				"type":    "text",
				"content": "Campaign reached 2M+ decision makers and generated 15,000 qualified enterprise leads.",
			},
		},
	}
	if err := InsertCaseStudy(googleCS1); err != nil {
		return fmt.Errorf("failed to insert Google case study 1: %v", err)
	}

	// Google Case Study 2
	googleCS2 := CaseStudy{
		CompanyID:  "google-001",
		TemplateID: "template-2",
		Blocks: []map[string]interface{}{
			{
				"type":    "header",
				"content": "Google Cloud Platform Documentation",
			},
			{
				"type":    "text",
				"content": "Complete information architecture redesign and content strategy for GCP documentation.",
			},
			{
				"type":    "metrics",
				"content": "70% improvement in findability, 40% reduction in time-to-solution",
			},
		},
	}
	if err := InsertCaseStudy(googleCS2); err != nil {
		return fmt.Errorf("failed to insert Google case study 2: %v", err)
	}

	// Google Case Study 3
	googleCS3 := CaseStudy{
		CompanyID:  "google-001",
		TemplateID: "template-3",
		Blocks: []map[string]interface{}{
			{
				"type":    "header",
				"content": "Google Fi Mobile App Redesign",
			},
			{
				"type":    "text",
				"content": "End-to-end mobile app redesign focusing on simplified plan management and improved customer support access.",
			},
			{
				"type":    "image",
				"content": "/images/google-fi-app.jpg",
			},
			{
				"type":    "text",
				"content": "App store ratings improved from 3.2 to 4.6 stars, with 50% reduction in support call volume.",
			},
		},
	}
	if err := InsertCaseStudy(googleCS3); err != nil {
		return fmt.Errorf("failed to insert Google case study 3: %v", err)
	}

	fmt.Println("Mock data seeded successfully!")
	return nil
}
