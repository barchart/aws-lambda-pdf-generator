.PHONY: clean

.DEFAULT_GOAL := all

CHROME_REPO=https://github.com/Sparticuz/chromium.git
LAYERS_FOLDER=layers

all: ${LAYERS_FOLDER}/chromium-v153.zip

${LAYERS_FOLDER}/chromium-v153.zip:
	@echo 'Downloading...' \
	&& git clone $(CHROME_REPO) chromium-aws-lambda --depth 1 --branch v153.0.0 \
	&& echo 'Making .zip archive...' \
	&& cd chromium-aws-lambda \
	&& rm -rf node_modules \
	&& npm i \
	&& mkdir -p bin/x64 && cp ../../../node_modules/@sparticuz/chromium/bin/* bin/x64/ \
	&& make chromium-aws-lambda.x64.zip && mkdir -p ./../layers && mv chromium-aws-lambda.x64.zip ./../${LAYERS_FOLDER}/chromium-v153.zip \
	&& echo 'Removing unnecessary stuff...' \
	&& cd ../ && rm -rf chromium-aws-lambda \
	&& echo 'Done'

clean:
	rm -rf layers && rm -rf chromium-aws-lambda
