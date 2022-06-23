# Release Notes

## 2.1.0
**New Features**

* Added the `service/version` endpoint to the API.

**Technical Enhancements**

* Updated Node.js runtime to version 14.
* Updated AWS CodeBuild to use Node.js version 14.
* Updated the Serverless framework to version 3.
* Updated the [`puppeteer`](https://github.com/puppeteer/puppeteer), [`puppeteer-core`](https://github.com/puppeteer/puppeteer) and [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda) libraries to version 10.1.0. Puppeteer version 14 is available; however, at present the chrome-aws-lambda library does not support any version past 10.1.0. See more details in the [`README.md`](https://github.com/barchart/aws-lambda-pdf-generator/blob/master/packages/api/README.md) file for the API.
* Updated various other dependencies.

## 2.0.0
**Breaking Changes**

* Removed `print/v81` and `print/v83` endpoints from the API. Only the `print` endpoint remains.
* Renamed application. Avoid problems by removing previous installations first (see the `sls remove` command).

**New Features**

* Generation of PDF files larger than 10 MB is now supported. (using gzip compression or an HTTP 303 response).

**Technical Enhancements**

* Converted project to use [Lerna](https://github.com/lerna/lerna) approach.
* Upgraded [Serverless](https://www.serverless.com/) framework to version 2.13.0 (or better).
* Added descriptions for application and functions to `serverless.yml` file.
* Updated Chromium version from `v83` to `v88`.


## 1.1.1
**No Functional Changes**

* Finalized [Documentation](https://barchart.github.io/aws-lambda-pdf-generator/#/).

## 1.1.0
**New Features**

* Added ```source``` field as part of the request body.

**Other**

* Added printer failure types.
* Improved logging.

## 1.0.5
**Initial Public Release**
