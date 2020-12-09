.PHONY: clean

.DEFAULT_GOAL := all

CHROME_REPO=https://github.com/alixaxel/chrome-aws-lambda.git
LAYERS_FOLDER=layers

all: ${LAYERS_FOLDER}/chromium-v88.zip

${LAYERS_FOLDER}/chromium-v88.zip:
	@echo 'Downloading...' \
	&& git clone $(CHROME_REPO) --depth 1 --branch v5.5.0 \
	&& echo 'Making .zip archive...' \
	&& cd chrome-aws-lambda && make chrome_aws_lambda.zip && mkdir -p ./../layers && mv chrome_aws_lambda.zip ./../${LAYERS_FOLDER}/chromium-v88.zip \
	&& echo 'Removing unnecessary stuff...' \
	&& cd ../ && rm -rf chrome-aws-lambda \
	&& echo 'Done'

clean:
	rm -rf layers && rm -rf chrome-aws-lambda
