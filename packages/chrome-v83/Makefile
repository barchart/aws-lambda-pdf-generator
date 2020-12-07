.DEFAULT_GOAL := all

all: initialize download make-layer move-layer clean

CHROME_REPO=https://github.com/alixaxel/chrome-aws-lambda.git
CHROME_TAG=v3.1.1

initialize:
	@echo "Initializing..." \
	&& rm -rf layers

download:
	@echo "Downloading..." \
    && git clone $(CHROME_REPO) --depth 1 --branch $(CHROME_TAG)

make-layer:
	@echo "Making layer..." \
	&& cd chrome-aws-lambda \
	&& make chrome_aws_lambda.zip \
	&& cd ../

move-layer:
	@echo "Moving layer..." \
	&& mkdir --parents layers \
	&& mv chrome-aws-lambda/chrome_aws_lambda.zip ./layers/chrome-$(CHROME_TAG).zip

clean:
	@echo "Cleaning..." \
	&& rm -rf chrome-aws-lambda
