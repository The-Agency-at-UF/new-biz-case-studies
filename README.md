# new-biz-case-studies
Streamlining case study curation 

<img width="926" height="309" alt="image" src="https://github.com/user-attachments/assets/1494bca9-c8fb-43dd-9dac-9d0aadfc5d02" />

# Table of Contents
- [What is the New Business: Case Studies project?](#what-is-the-new-business-case-studies-project)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [How to get started](#how-to-get-started)
- [How to contribute](#how-to-contribute)
- [How to review code](#how-to-review-code)
- [Contact](#contact)
  
# What is the New Business: Case Studies project?

The New Business: Case Studies project is an internal tool built for The Agency's 
research department to streamline how case studies are curated and presented to 
prospective clients.

**The problem:** Showing new business prospects relevant past work has historically 
been a manual, time-consuming process — pulling together tailored examples for 
each pitch eats into the team's time.

**The solution:** A form-based content management system that lets the research 
team quickly upload and customize case studies — including paragraphs, titles, 
images, and timed animations — and instantly publish them to a client-facing 
website.

**Who it's for:** The Agency's new business team, used during pitches and outreach 
to show prospective clients what their product could look like.

**Inspiration:** [Monks Work Inventory](https://www.monks.com/work-inventory)

# Tech Stack

**Frontend**
- [Next.js 16](https://nextjs.org/) with Turbopack (dev)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://gsap.com/) for animations
- [Spline](https://spline.design/) for 3D content
- [Lucide](https://lucide.dev/) for icons
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [Resend](https://resend.com/) for email

**Backend**
- [Go 1.25](https://go.dev/) with the [Gin](https://github.com/gin-gonic/gin) web framework
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/) for data storage
- [AWS S3](https://aws.amazon.com/s3/) for file storage

# Prerequisites
Before getting started, make sure you have:
- [GitHub Desktop](https://desktop.github.com/)
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [Go](https://go.dev/dl/) v1.25 or higher
- [VSCode](https://code.visualstudio.com/)
- The project's `.env` file — request this from Hiral on Slack

# How to get started
1. Open GitHub Desktop and log in
2. Go to **File → Clone Repository → URL**, paste this repo's URL, note the local directory, and click **Clone**
3. In File Explorer, right-click the project folder and select **Open with VSCode**
4. Place the `.env` file inside `/backend` (request it from Hiral on Slack if you don't have it)
5. Open a terminal and start the frontend:
```bash
   cd frontend
   npm install
   npm run dev
```
6. Open a second terminal and start the backend:
```bash
   cd backend
   go run .
```
7. Visit [http://localhost:3000](http://localhost:3000) — you should see the project running!

See images below to aid you: 

<p align="center">
  <img src="https://github.com/user-attachments/assets/e6c351e6-c6e4-4591-842b-edeffb09cc3e" width="70%" alt="step 1">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/af7b1e71-6ca6-4e18-ac4c-debd17d5faa3" width="70%" alt="2025-10-08">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/e3c023de-42d5-4328-9b28-9189e903d8ac" width="70%" alt="image">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/492bdd36-b185-4597-801e-5b254b2bb970" width="70%" alt="step 2"/>
</p>

# How to contribute
1. Pull the latest `main` to avoid merge conflicts:
```bash
   git checkout main
   git pull
```
2. Create a new branch named `[your-initials]/[feature-name]`:
```bash
   git checkout -b mm/add-image-upload
```
3. Confirm you're on the right branch with `git branch` or check via GitHub Desktop
4. Publish your branch in GitHub Desktop, then make your edits in VSCode
5. Commit using [Conventional Commits](https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3) format:
   - Example: `feat: add image upload to case study form`
   - Example: `fix: resolve animation timing bug`
6. Push your branch and open a Pull Request on the GitHub website
7. Request reviewers and post in Slack to flag your PR

# How to review code
1. In GitHub Desktop, switch to the contributor's branch to pull it locally
2. Run the project locally (`npm run dev` in `/frontend`, `go run .` in `/backend`)
3. Test the changes:
   - Does the new feature work as described in the PR?
   - Are there any console errors or warnings?
   - Does the existing functionality still work?
4. On the GitHub PR page, click **Files changed** and leave inline comments on specific lines
5. Submit your review as **Approve**, **Request changes**, or **Comment**

# Contact
- **Project Lead:** Hiral Shukla — Slack or [hiralshukla@ufl.edu](mailto:hiralshukla@ufl.edu)



  
