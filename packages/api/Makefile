.PHONY: clean

.DEFAULT_GOAL := all

CHROME_REPO=https://github.com/alixaxel/chrome-aws-lambda.git
LAYERS_FOLDER=layers

all: ${LAYERS_FOLDER}/chromium-v92.zip

${LAYERS_FOLDER}/chromium-v92.zip:
	@echo 'Downloading...' \
	&& git clone $(CHROME_REPO) --depth 1 --branch v10.1.0 \
	&& echo 'Making .zip archive...' \
	&& cd chrome-aws-lambda \
	&& rm -rf node_modules \
	&& sed -i 's/\^4.3.2/4.3.2/g' package.json \
    && npm i \
	&& make chrome_aws_lambda.zip && mkdir -p ./../layers && mv chrome_aws_lambda.zip ./../${LAYERS_FOLDER}/chromium-v92.zip \
	&& echo 'Removing unnecessary stuff...' \
	&& cd ../ && rm -rf chrome-aws-lambda \
	&& echo 'Done'

clean:
	rm -rf layers && rm -rf chrome-aws-lambda
