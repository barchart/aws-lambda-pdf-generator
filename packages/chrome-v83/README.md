# @barchart/aws-lambda-pdf-generator/packages/chrome-v83

### Serverless

This project uses [Serverless](https://serverless.com/) for testing and deployment.

```shell
yarn global add serverless
```

#### Deployment

```shell
yarn deploy:[stage|prod]
```

### Local Testing

#### Using Serverless

```shell
sls invoke local -f printPdf --path print/test/print.json
```

