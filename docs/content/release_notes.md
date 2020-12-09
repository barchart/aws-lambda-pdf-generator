# Release Notes

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
