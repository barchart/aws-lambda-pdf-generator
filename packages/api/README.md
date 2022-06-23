# @barchart/serverless-pdf-generator

### Technical Notes

**2022/06/22, BRI.** At version 2.1.0, we updated the Node.js runtime for AWS Lambda to version 14. Ideally, we'd use Node.js version 16. However, the [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda#versioning) does not yet support Node.js version 16. A [pull request](https://github.com/alixaxel/chrome-aws-lambda/pull/274) does exist, however, the maintainers have not yet merged it.

**2022/06/22, BRI.** Also, at version 2.1.0, we updated the [`puppeteer`](https://github.com/puppeteer/puppeteer), [`puppeteer-core`](https://github.com/puppeteer/puppeteer), and [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda#versioning) libraries to version 10.1.0. Puppeteer is currently on version 14; however, [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda#versioning) does not support versions of puppeteer beyond 10.1.0.

**2022/06/22. BRI.** Additionally, there is a bug in the latest version 10.1.0 of [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda#versioning). The `make all` command fails because of an incompatibility with TypeScript. An [issue](https://github.com/alixaxel/chrome-aws-lambda/issues/236) and [pull request](https://github.com/alixaxel/chrome-aws-lambda/pull/237) was created to address this issue. However, until the repository has been tagged, this issue is addressed by a `sed` command in the [`Makefile`]() that overrides the TypeScript version. One this issue has been resolved, the Makefile hack can be removed.

**2022/06/22. BRI.** It would be nice to use ARM architecture for AWS Lambda functions. The [`chrome-aws-lambda`](https://github.com/alixaxel/chrome-aws-lambda#versioning) project has not yet added support, although an issue does exist.
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