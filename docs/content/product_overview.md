**This is a project with serverless applications which allow you to print HTML pages as PDF by making an HTTP request.**

You can _quickly_ build an API with a wide range of _chrome_ browser versions ([puppeteer](https://www.npmjs.com/package/puppeteer) is used under the hood).

## Environment

### Serverless (AWS Lambda)

[Serverless framework](https://www.serverless.com) is required to run and deploy application.

### Node.js

This project uses Node.js runtime.

### Browsers

There are two _chrome_ versions currently installed and tested:

* v81
* v83

## Important limitations (AWS)

| Resource or Operation | Limit |
| ------------- | ------------- |
| Payload size (AWS Lambda)  | 6 MB  |
| Response size (AWS Lambda)  | 6 MB  |
| Running timeout (AWS API Gateway + AWS Lambda)  | 30 seconds |

Read more about [AWS API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html) and [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) limits.
