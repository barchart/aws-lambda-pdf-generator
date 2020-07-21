# @barchart/aws-lambda-pdf-generator

### Serverless

This project uses [Serverless](https://serverless.com/) for testing and deployment.

```shell
npm i serverless --global
```

#### Deployment

```shell
sls deploy --stage [stage|prod]
```

### Environment

    > Node 12.13.1

### Local testing

```
sls invoke local  -f printPdf --path lambda/api/test/print.json --stage stage
```
