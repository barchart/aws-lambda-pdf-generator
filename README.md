# @barchart/aws-lambda-pdf-generator

### Serverless

This project uses [Serverless](https://serverless.com/) for testing and deployment.

```shell
npm i serverless --global
```

### Run guide

1. Go to root: ```cd aws-lambda-pdf-generator```
2. Install dependencies: ```npm install```
3. Go into specific browser version folder e.g. ```cd lambda/api/node-12/chrome-v83```
4. Install dependencies: ```npm install```
5. Go to root: ```cd ../../../../../aws-lambda-pdf-generator```
6. Run: ```sls invoke local  -f printPdf-v83 --path lambda/api/node-12/chrome-v83/test/print.json --stage stage```

### Deployment

```shell
sls deploy --stage [stage|prod]
```

### Environment

    > Node 12.13.1

### Local testing

```
sls invoke local  -f printPdf-v81 --path lambda/api/node-12/chrome-v81/test/print.json --stage stage
sls invoke local  -f printPdf-v83 --path lambda/api/node-12/chrome-v83/test/print.json --stage stage
```
