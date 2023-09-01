.PHONY: clean

.DEFAULT_GOAL := all

CHROME_REPO=https://github.com/Sparticuz/chromium.git
LAYERS_FOLDER=layers

all: ${LAYERS_FOLDER}/chromium-v116.zip

${LAYERS_FOLDER}/chromium-v116.zip:
	@echo 'Downloading...' \
	&& git clone $(CHROME_REPO) chromium-aws-lambda --depth 1 --branch v116.0.0 \
	&& echo 'Making .zip archive...' \
	&& cd chromium-aws-lambda \
	&& rm -rf node_modules \
    && npm i \
	&& make chromium-aws-lambda.zip && mkdir -p ./../layers && mv chromium-aws-lambda.zip ./../${LAYERS_FOLDER}/chromium-v116.zip \
	&& echo 'Removing unnecessary stuff...' \
	&& cd ../ && rm -rf chromium-aws-lambda \
	&& echo 'Done'

clean:
	rm -rf layers && rm -rf chromium-aws-lambda
