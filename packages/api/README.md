# @barchart/serverless-pdf-generator

### Serverless

This project uses the [Serverless](https://serverless.com/) framework for testing and deployment.

#### Installation

```shell
yarn global add serverless
```

#### Deployment

Deploy the service from from the project's root directory.

```shell
cd ./../..
yarn install
yarn run deploy:[stage|prod]
```

#### Local Testing

```shell
sls invoke local -f print --path print/test/print.json
sls invoke local -f print --path print/test/print.5MB.json
```