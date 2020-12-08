# @barchart/aws-lambda-pdf-generator

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiTmtsZEw3M2l3cktxd3crQTJpMVVRbEUzU1dOMFBodFU0MlhaNUFZaC9kVzBIN1FYUXVVZFFUK29vcU5tazJyckNtVFFxL3BoSEdYMEk3V3dUOEhNUFhNPSIsIml2UGFyYW1ldGVyU3BlYyI6Ik84YnJJU1NUZDMvR3VLaXYiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/aws-lambda-pdf-generator)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

**Generate PDF files from HTML documents.**

Simply ```POST``` your HTML document to a web service and receive an ```application/pdf``` document in response.

### Implementation

* The [Serverless](https://www.serverless.com/) framework creates a web service on the AWS cloud using [AWS API Gateway](https://aws.amazon.com/api-gateway/) and [AWS Lambda](https://aws.amazon.com/lambda/).
* The service uses [Puppeteer](https://github.com/puppeteer/puppeteer) and [Chromium](https://github.com/alixaxel/chrome-aws-lambda) to render an HTML document as a PDF file.

### Documentation

Complete documentation for installation and operation can be found [here](https://barchart.github.io/aws-lambda-pdf-generator/#/).

### Packages

* [api](./packages/api) - The REST API which accepts HTML documents and responds with PDF files.

### License

This software is provided under the MIT license.
