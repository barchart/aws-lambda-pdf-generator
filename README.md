# @barchart/aws-lambda-pdf-generator

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiTmtsZEw3M2l3cktxd3crQTJpMVVRbEUzU1dOMFBodFU0MlhaNUFZaC9kVzBIN1FYUXVVZFFUK29vcU5tazJyckNtVFFxL3BoSEdYMEk3V3dUOEhNUFhNPSIsIml2UGFyYW1ldGVyU3BlYyI6Ik84YnJJU1NUZDMvR3VLaXYiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/aws-lambda-pdf-generator)

**Generate PDF documents from HTML.** Simply ```POST``` your HTML document to a web service and receive an ```application/pdf``` response.

## Implementation

Underneath the covers, this application uses [Serverless](https://www.serverless.com/) to create an web service using [AWS API Gateway](https://aws.amazon.com/api-gateway/) and [AWS Lambda](https://aws.amazon.com/lambda/). The Lambda function renders the PDF document using [Puppeteer](https://github.com/puppeteer/puppeteer) and [Chromium](https://github.com/alixaxel/chrome-aws-lambda).


### Documentation

Complete documentation for installation and operation can be found [here](https://barchart.github.io/aws-lambda-pdf-generator/#/).

### License

This software is provided under the MIT license.

