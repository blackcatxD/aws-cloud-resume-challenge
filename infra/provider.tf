terraform {
  required_providers {
    aws = {
      version =">=4.9.0"
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  access_key = "your_access_key"
  secret_key = "your_secret_key"
  region = "ap-south-1"
}