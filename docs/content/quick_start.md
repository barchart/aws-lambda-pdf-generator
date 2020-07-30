## Setup

### Serverless

This project uses [serverless framework](https://www.serverless.com) for testing and deployment.

```shell
npm i serverless --global
```
    
### Local testing and deploying

#### Installing dependencies
    
```shell
npm install
cd lambda/api/node-12/chrome-v81
npm install
cd lambda/api/node-12/chrome-v83
npm install
```

#### Local testing

```shell
sls invoke local -f printPdf-v81 --path lambda/api/node-12/chrome-v81/test/print.json --stage stage
sls invoke local -f printPdf-v83 --path lambda/api/node-12/chrome-v83/test/print.json --stage stage
```

#### Deploying

```shell
sls deploy --stage stage
sls deploy --stage prod
```
