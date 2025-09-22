# Cloud Resume Challenge

## Overview
This repository contains the source code for my personal resume website, built as part of the **Cloud Resume Challenge**. The site showcases my skills, experience, and certifications as a Cloud & DevOps Engineer, with a focus on AWS technologies. The website is a static single-page application hosted on **AWS S3** with a **CloudFront** distribution for global content delivery.

The project maintained demonstrates proficiency in:
- **Frontend**: HTML, CSS, JavaScript
- **Cloud Infrastructure**: AWS S3, CloudFront
- **Infrastructure as Code (IaC)**: Terraform
- **CI/CD**: GitHub Actions for automated deployment
- **Version Control**: Git and GitHub with SSH authentication

## Website Details
- **URL**: [https://resume.manojcloud.click](#) (replace with your actual S3/CloudFront URL once deployed)
- **Files**:
  - `index.html`: Main structure of the resume website
  - `style.css`: Styling for the website, including animations (moon, particles, searchlight)
  - `script.js`: JavaScript for dynamic particle effects (stars and shooting stars)
- **Features**:
  - Responsive design with a dark, space-themed aesthetic
  - Sections for professional summary, work experience, skills, certifications, education, and links
  - Interactive navigation and hover effects

## Architecture
- **Hosting**: Static files are stored in an S3 bucket configured for static website hosting.
- **Content Delivery**: AWS CloudFront serves the site with low latency and HTTPS support.
- **CI/CD**: GitHub Actions automates deployment by syncing files to S3 on every push to the `main` branch.
- **IaC**: Infrastructure is defined using Terraform (or AWS CDK) to provision and manage the S3 bucket and CloudFront distribution.

## Setup Instructions
### Prerequisites
- Git installed locally
- AWS account with credentials configured
- Terraform (or AWS CDK) installed for IaC
- GitHub repository with SSH key authentication

### Local Development
1. Clone the repository:
   ```bash
   git clone git@github.com:blackcatxD/aws-cloud-resume-challenge.git
   ```
2. Navigate to the project folder:
   ```bash
   cd your-repo-name
   ```
3. Open `index.html` in a browser to preview the site locally.

### Deploying to AWS
1. **IaC Setup**:
   - Navigate to the `infra/` folder
   - Run:
     ```bash
     terraform init
     terraform apply
     ```
     This provisions the S3 bucket and CloudFront distribution.
2. **CI/CD Pipeline**:
   - A GitHub Actions workflow (`.github/workflows/front-end-cicd.yml`) syncs files to S3 on push:
     ```yaml
     
        name : Upload website to S3

        on:
          push:
            branches:
            - main
          
        jobs:
          deploy:
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v4
            - uses: jakejarvis/s3-sync-action@v0.5.1
              with:
              args: --follow-symlinks --delete
              env:
              AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
              AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
              AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
              AWS_REGION: 'ap-south-1'
              SOURCE_DIR: 'website'
     ```
   - Store AWS credentials in GitHub Secrets (Settings > Secrets and variables > Actions).

### Accessing the Site
- After deployment, access the site via the CloudFront distribution URL (e.g., `https://d12345678.cloudfront.net`).
- Optionally, configure a custom domain with Route 53.

## Project Structure
```
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript for particle effects
├── infra/              # Terraform or CDK files for IaC (if applicable)
├── .github/workflows/  # GitHub Actions workflows
│   └── deploy.yml      # CI/CD pipeline for S3 deployment
├── .gitignore          # Ignore unnecessary files
└── README.md           # This file
```

## Future Improvements
- Add a custom domain via AWS Route 53
- Implement a visitor counter using AWS Lambda and DynamoDB
- Enhance accessibility (e.g., ARIA labels, keyboard navigation)
- Add unit tests for JavaScript functionality

## Contact
- **LinkedIn**: [linkedin.com/in/Manoj](https://www.linkedin.com/in/manoj-kumar-ramamurthy)
- **GitHub**: [github.com/Manoj](https://github.com/Manoj)
- **Email**: rmk7382@gmail.com 

## License
© 2025 Manoj Kumar Ramamurthy. All rights reserved.