# Deja ECS Demo App

A simple Node.js "Hello World" app demonstrating **AWS ECS Fargate deployment** with **Docker** and **GitHub Actions CI/CD**.

This project was built alongside **AWS Cloud Practitioner coursework** to practice containerization, deployment, and automation.

---

## Features

- Dockerized Node.js application
- Hosted on AWS ECS Fargate
- Image stored in AWS ECR
- CI/CD pipeline via GitHub Actions
- CloudWatch logging for container tasks

---

## Prerequisites

- Node.js installed locally
- Docker installed locally
- AWS CLI configured with credentials
- GitHub repository with workflow access
- ECS Fargate cluster and service

---

## Deployment
AWS Setup

Create an ECR repository and push your Docker image.

Create ECS Task Definition with:

Execution role (ecsTaskExecutionRole)

Container port 3000

CloudWatch logging

Create an ECS Fargate service in your cluster.

CI/CD with GitHub Actions

Workflow file: .github/workflows/deploy.yml

Automatically triggered on main branch push

Steps:

Checkout code

Log in to AWS ECR

Build and push Docker image

Update ECS service with new task definition

Logging

CloudWatch log group: /ecs/deja-demo-app

Log stream prefix: ecs

Check logs for debugging ECS tasks

Testing CI/CD

Make a small change in index.js (e.g., change "Hello World" to "Hello World v2").

Commit and push to main branch.

GitHub Actions workflow redeploys automatically.

Visit the ECS public IP to see the updated app.

Next Steps / Improvements

Parameterize Docker image tags instead of using latest

Add staging and production environments

Use Terraform to manage ECS/ECR infrastructure

Add proper error handling in Node.js app

## Author 

Deja Pixel
Learning cloud deployments and automation while completing AWS Cloud Practitioner coursework.
