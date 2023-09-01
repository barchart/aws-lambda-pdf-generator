# @barchart/serverless-pdf-generator

### Serverless

This project uses the [Serverless](https://serverless.com/) framework for testing and deployment.

#### Installation

```shell
yarn global add serverless
```

#### Deployment

Deploy the service from the project's root directory.

```shell
cd ./../..
yarn install
yarn run deploy:[stage|prod]
```

### Testing

#### Local Testing

```shell
sls invoke local -f print --path print/test/print.json
sls invoke local -f print --path print/test/print.5MB.json

sls invoke local -f serviceRead --path service/test/version.json
```

#### Remote Testing

```shell
curl 'https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/stage/print' \
  -X 'POST' \
  --output testing.pdf \
  --data-binary '{"source":"testing","html":"<html><body><h1>Hello World</h1><div>You have converted an HTML document into a PDF file.</div></body></html>"}'
```

### Technical Notes

**ARM Architecture (2023/08/31, v3.0.0)**

> It would be nice to use ARM architecture for AWS Lambda functions (and use Apple silicon locally). However, the [`@sparticuz/chromium`](https://github.com/Sparticuz/chromium) project has not yet added support. See the comments [here](https://github.com/Sparticuz/chromium#running-locally--headlessheadful-mode).