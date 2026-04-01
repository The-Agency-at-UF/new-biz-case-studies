# Backend Hosting Guide: Go + AWS (DynamoDB/S3)

Since your frontend is on Vercel and your data is on AWS, you have three primary paths for hosting your Go backend. This guide details each option, prioritizing the best fit for small teams and internal tools.

---

## 1. Railway (Top Recommendation - Best for Small Teams)

Railway offers a "Vercel-like" experience for backends. It is the easiest way to host a Go API for internal tools or apps with a few dozen users.

### 🚀 Step-by-Step Setup

1.  **Connect GitHub:**
    - Log in to [Railway.app](https://railway.app) using your GitHub account.
    - Click **"New Project"** -> **"Deploy from GitHub repo"**.
    - Select your `new-biz-case-studies` repository.
2.  **Configure Monorepo Settings:**
    - Once selected, click **"Add Variables"** (this opens the settings).
    - Go to the **"Settings"** tab.
    - Find **"Root Directory"** and set it to `backend/`. This tells Railway to ignore the frontend and only build the Go app.
3.  **Add AWS Environment Variables:**
    - Go to the **"Variables"** tab.
    - Click **"New Variable"** and add these from your AWS IAM User:
      - `AWS_ACCESS_KEY_ID`: (Your Access Key)
      - `AWS_SECRET_ACCESS_KEY`: (Your Secret Key)
      - `AWS_REGION`: `us-east-1` (or your specific region)
    - _Note: Railway automatically detects your Go version and `go.mod` file._
4.  **Expose the API:**
    - Go to the **"Settings"** tab.
    - Under **"Networking"**, click **"Generate Domain"**.
    - Copy this URL (e.g., `https://backend-production-xxxx.up.railway.app`). **This is your Backend URL.**

### 💰 Cost

- **Pricing Model:** Usage-based (CPU/RAM minutes).
- **Estimation:** ~$5/month for most small projects. Railway gives you a $5/mo credit on their Hobby plan, meaning it may stay free for very low-traffic tools.

---

## 🔗 Connecting Vercel (Frontend) to Railway (Backend)

To make your frontend talk to your backend, you must complete these two final steps:

### Step 1: Update Vercel Environment Variables

1.  Log in to your **Vercel Dashboard**.
2.  Go to your Project **Settings** -> **Environment Variables**.
3.  Add a new variable:
    - **Key:** `NEXT_PUBLIC_BACKEND_URL`
    - **Value:** `https://your-railway-url.up.railway.app` (The URL you copied from Railway).
4.  **Redeploy** your Vercel app for the changes to take effect.

### Step 2: Update CORS in your Go Backend

By default, browsers block requests from one domain (Vercel) to another (Railway). You must explicitly allow your Vercel URL in your Go code:

1.  Open `backend/main.go`.
2.  Find the `cors.Config` section (around line 30).
3.  Update the `AllowOrigins` list:
    ```go
    r.Use(cors.New(cors.Config{
        AllowOrigins: []string{
            "http://localhost:3000",        // Local development
            "https://your-app.vercel.app",  // Your production Vercel URL
        },
        AllowMethods: []string{"GET", "POST", "DELETE", "PUT"},
        AllowHeaders: []string{"Origin", "Content-Type"},
    }))
    ```
4.  Commit and push this change to GitHub. Railway will automatically redeploy with the new CORS settings.

---

## 💡 How to Create a Go Dockerfile (Optional)

While Railway can build Go apps automatically using "Nixpacks," creating a `Dockerfile` can be more professional and gives you total control.

1.  **Create the file:** In `backend/`, create a file named `Dockerfile`.
2.  **Paste this Content:**

    ```dockerfile
    # Stage 1: Build
    FROM golang:1.24-alpine AS builder
    WORKDIR /app
    COPY go.mod go.sum ./
    RUN go mod download
    COPY . .
    RUN go build -o main .

    # Stage 2: Run
    FROM alpine:latest
    WORKDIR /root/
    COPY --from=builder /app/main .
    ENV GIN_MODE=release
    ENV PORT=8080
    EXPOSE 8080
    CMD ["./main"]
    ```

**Why this matters:** This keeps your image tiny (~20MB), making deployments on Railway incredibly fast and saving you money on storage/RAM usage.

---

## Comparison Summary

| Feature            | Railway          | AWS ECS Express | AWS Lambda     |
| :----------------- | :--------------- | :-------------- | :------------- |
| **Recommendation** | **Best for You** | For Enterprise  | For Budget     |
| **Ease of Setup**  | **Easiest**      | Moderate        | Hard           |
| **Monthly Cost**   | ~$5              | ~$20+           | **~$0**        |
| **Maintenance**    | **Minimal**      | High            | Moderate       |
| **Security**       | Good (Env Vars)  | **Best (IAM)**  | **Best (IAM)** |

### Final Recommendation

For an internal tool with a few dozen users, **Railway** is the clear winner. It gives you the best developer experience and the lowest maintenance overhead, allowing you to focus on building features rather than managing infrastructure.
