# @barchart/aws-lambda-pdf-generator

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiTmtsZEw3M2l3cktxd3crQTJpMVVRbEUzU1dOMFBodFU0MlhaNUFZaC9kVzBIN1FYUXVVZFFUK29vcU5tazJyckNtVFFxL3BoSEdYMEk3V3dUOEhNUFhNPSIsIml2UGFyYW1ldGVyU3BlYyI6Ik84YnJJU1NUZDMvR3VLaXYiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/aws-lambda-pdf-generator)

A [Serverless](https://www.serverless.com/) application for generating PDF documents from HTML.

### Deployment Guide

This application must use the Node.js version 12 runtime.

```shell
npm install
cd lambda/api/node-12/chrome-v81
npm install
cd lambda/api/node-12/chrome-v83
npm install
cd ../../../..
sls deploy --stage stage
sls deploy --stage prod
```

### Local Testing

```
sls invoke local  -f printPdf-v81 --path lambda/api/node-12/chrome-v81/test/print.json --stage stage
sls invoke local  -f printPdf-v83 --path lambda/api/node-12/chrome-v83/test/print.json --stage stage
```

