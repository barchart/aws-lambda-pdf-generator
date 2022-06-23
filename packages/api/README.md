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

**Node.js Runtime (2022/06/22, v2.1.0)**

> The Node.js runtime for AWS Lambda was updated to version 14. Ideally, we'd use Node.js version 16. However, the [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda) library does not yet support Node.js version 16. A [pull request](https://github.com/alixaxel/chrome-aws-lambda/pull/274) does exist, however, the project's maintainers have not yet merged it.

**Puppeteer Version (2022/06/22, v2.1.0)**

> Also, the [`puppeteer`](https://github.com/puppeteer/puppeteer), [`puppeteer-core`](https://github.com/puppeteer/puppeteer), and [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda) libraries were updated version 10.1.0. Puppeteer is currently on version 14; however, [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda) does not support versions of puppeteer beyond 10.1.0.

**Bug (2022/06/22, v2.1.0)**

> Additionally, there is a bug in the latest version 10.1.0 of [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda). The `make all` command fails because of an incompatibility with TypeScript. This has been documented with an [issue](https://github.com/alixaxel/chrome-aws-lambda/issues/236) and a [pull request](https://github.com/alixaxel/chrome-aws-lambda/pull/237). However, the repository has not been tagged and released (more than a year later). For now, this issue is addressed by the addition of a `sed` command in the local [`Makefile`](https://github.com/barchart/aws-lambda-pdf-generator/blob/master/packages/api/Makefile) that overrides the TypeScript version. One this issue has been resolved, the Makefile hack can be removed.

**ARM Architecture (2022/06/22, v2.1.0)**

> Finally, it would be nice to use ARM architecture for AWS Lambda functions. The [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda) project has not yet added support, although an [issue](https://github.com/alixaxel/chrome-aws-lambda/issues/275) and a [pull request](https://github.com/alixaxel/chrome-aws-lambda/pull/274) have been created.
