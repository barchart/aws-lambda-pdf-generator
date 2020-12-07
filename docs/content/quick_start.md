## Overview

**This software deploys a web service using AWS infrastructure with endpoints that convert HTML documents into PDF documents.**

## Requirements

* Create an [Amazon Web Services](https://aws.amazon.com/) account — sign up [here](https://portal.aws.amazon.com/billing/signup#/start).
* Install [Node.js](https://nodejs.org/en/) — we recommend using the [Node Version Manager](https://github.com/nvm-sh/nvm).
* Install the [Serverless](https://www.serverless.com/) framework — here are the [instructions](https://www.serverless.com/framework/docs/providers/aws/guide/installation/).

## Deployment

Install the required dependencies using `yarn`, as follows:

```shell
yarn install
```

Then, execute the deployment, as follows:

```
yarn deploy:stage
```

Once deployed, the API Gateway will assign a hostname to your web service.

## Lambda Layers

Lambda layers are used to pull in `chrome-aws-lambda` package.`Makefile` is used to 
make gzip archive with required dependencies. Read more [here](https://github.com/alixaxel/chrome-aws-lambda#aws-lambda-layer).

## Endpoints

Your web service exposes endpoint:

* ```/print``` - Renders the PDF document using Chromium v83.

The endpoint expects a JSON document, with the following properties:

* ```html``` - A required ```String``` which contains the HTML document itself.
* ```source``` - An optional ```String``` describing the document.
* ```settings``` - An optional ```Object``` which contains [puppeteer options](https://github.com/puppeteer/puppeteer/blob/v5.2.1/docs/api.md#pagepdfoptions).

Here is an example:

```json
{
	"source": "testing",
	"html": "<html><body><h1>Hello World</h1><div>You have converted an HTML document into a PDF file.</div></body></html>"
}
```

## Testing

Before deployment, you can run the code locally - simulating the AWS infrastructure, as follows:

```shell
cd packages/chrome-v83
sls invoke local -f printPdf --path print/test/print.json
sls invoke local -f printPdf --path print/test/print.5MB.json
```

After deployment, you can test the web service by issuing a ```POST``` request to the actual web service. Here is an example cURL command (obviosuly, you'll need to correct the hostname).

```shell
curl 'https://uvw4xxcjtg.execute-api.us-east-1.amazonaws.com/test/print' \
  -X 'POST' \
  --output testing.pdf \
  --data-binary '{"source":"testing","html":"<html><body><h1>Hello World</h1><div>You have converted an HTML document into a PDF file.</div></body></html>"}'
```

## Implementation

This application uses the [Serverless](https://www.serverless.com/) framework to create a web service using [AWS API Gateway](https://aws.amazon.com/api-gateway/) and [AWS Lambda](https://aws.amazon.com/lambda/). Lambda functions render the PDF documents using [Puppeteer](https://github.com/puppeteer/puppeteer) and [Chromium](https://github.com/alixaxel/chrome-aws-lambda).

## Compression

By default, `GZIP` and `S3` strategies for handling large responses are enabled. They allow you to return response up to `50 MB`.

## Limitations

| Resource or Operation | Limit |
| ------------- | ------------- |
| Payload size for input HTML document | 6 MB  |
| Run time for PDF generation  | 30 seconds |

These AWS limitations can be overcome. However, we would need to render the PDF document asynchronously. At present, there is no plan to make these enhancements.
