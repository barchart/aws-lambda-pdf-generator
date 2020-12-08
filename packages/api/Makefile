.PHONY: clean

.DEFAULT_GOAL := all

CHROME_REPO=https://github.com/alixaxel/chrome-aws-lambda.git
LAYERS_FOLDER=layers

all: ${LAYERS_FOLDER}/chrome-v83.zip

${LAYERS_FOLDER}/chrome-v83.zip:
	@echo 'Downloading...' \
	&& git clone $(CHROME_REPO) --depth 1 --branch v3.1.1 \
	&& echo 'Making .zip archive...' \
	&& cd chrome-aws-lambda && make chrome_aws_lambda.zip && mkdir --parents ./../layers && mv chrome_aws_lambda.zip ./../${LAYERS_FOLDER}/chrome-v83.zip \
	&& echo 'Removing unnecessary stuff...' \
	&& cd ../ && rm -rf chrome-aws-lambda \
	&& echo 'Done'

clean:
	rm -rf layers && rm -rf chrome-aws-lambda
