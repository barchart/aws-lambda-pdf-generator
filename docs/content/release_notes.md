# Release Notes

## 2.0.0
**Breaking Changes**

* Removed `print/v81` and `print/v83` endpoints from the API.

**New Features**

* This service can now generate PDF files larger than 10 MB. An HTTP response with code 303 and a temporary link to an S3 object will be returned.

**Technical Enhancements**

* Upgrade [Serverless](https://www.serverless.com/) framework to version 2.13.0 (or better).
* Add descriptions for application and functions to `serverless.yml` file.
* Converted project to use [Lerna](https://github.com/lerna/lerna) approach.


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
