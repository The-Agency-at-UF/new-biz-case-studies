# Architecture: Dynamic Client-Specific Landing Pages

This document outlines the strategy for implementing personalized URLs (e.g., `example.com/companyA`) to show specific case studies to prospective clients.

## 1. Requirement Summary
- **Goal:** Provide a unique, professional URL for each prospect.
- **Functionality:** When a user visits `/<company-slug>`, the site fetches only the case studies assigned to that company in DynamoDB.
- **Example:** `agency.vercel.app/uber` shows Uber's specific case studies, while `agency.vercel.app/coke` shows others.

## 2. Technical Architecture

### A. Backend (Go + DynamoDB)
The backend is already well-positioned for this. We will use the existing `Companies` and `CaseStudies` tables.

- **Data Schema (DynamoDB):**
    - **Companies Table:** Ensure each item has a `Slug` (e.g., "uber") or use `CompanyID` as the slug.
    - **Relationship:** The `Companies` item contains an array of `CaseStudyIDs`.
- **API Endpoint:** 
    - `GET /api/company/:slug`: Returns company metadata and the list of associated case study IDs.
    - `GET /api/company/:slug/details`: A "joined" response that returns the full case study objects in one call to minimize frontend latency.

### B. Frontend (Next.js App Router)
Next.js handles this via **Dynamic Routes**.

- **Structure:** Move or copy the logic from `src/app/presentation/` to a new dynamic segment: `src/app/[companySlug]/page.tsx`.
- **Data Fetching:** 
    - Use `fetch` within the Server Component to call the Go backend.
    - **Static Params (Optional):** If the list of companies is small, use `generateStaticParams` to pre-render these pages at build time for instant loading.

### C. Data Flow
1. **User Request:** User navigates to `your-site.com/amazon`.
2. **Next.js Route:** `[companySlug]` captures "amazon".
3. **Backend Query:** The frontend calls `GET /api/company/amazon`.
4. **DynamoDB Lookup:** The Go backend queries the `Companies` table for the "amazon" slug.
5. **Response:** Backend returns the branding info and case studies for Amazon.
6. **Render:** Next.js renders the `PortfolioGrid` with only those studies.

## 3. Vercel & URL Advice

### Dynamic Routes on Vercel
Vercel handles Next.js dynamic routes (`[slug]`) natively. No extra configuration is needed.

### Performance Tip: ISR (Incremental Static Regeneration)
Since company data doesn't change every second, use `revalidate` in your fetch calls:
```tsx
const res = await fetch(`.../api/company/${slug}`, { next: { revalidate: 3600 } });
```
This ensures the page is cached on Vercel's Edge Network, making it load instantly for the client, while still updating every hour if you change their case studies in the admin panel.

### Custom Domains
If you eventually want `client.yourbrand.com`, Vercel's **Middleware** can rewrite `client.yourbrand.com` to `yourbrand.com/client` internally, keeping the URL "clean" for the prospect.

## 4. Implementation Checklist
- [ ] **Backend:** Update `GetCompany` logic to support slug-based lookups if IDs are not human-readable.
- [ ] **Frontend:** Create `src/app/[companySlug]/page.tsx`.
- [ ] **Frontend:** Update `src/app/admin` to allow assigning existing case studies to a company.
- [ ] **Infrastructure:** Ensure `NEXT_PUBLIC_BACKEND_URL` is set in Vercel's Environment Variables.
