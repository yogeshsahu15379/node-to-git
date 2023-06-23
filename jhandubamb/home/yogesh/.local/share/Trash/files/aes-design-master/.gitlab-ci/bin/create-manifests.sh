#!/usr/bin/env bash
# Common script to create the manifests for the Kubernetes cluster.
# Called from .gitlab-ci.yml to create manifests and cleanup environments.
# Pass branch to generate manifests for as optional argument.

rootDir=".gitlab-ci"
scriptDir="${rootDir}/bin"
chartDir="${rootDir}/design"
manifestDir=".manifests"

set -ex

# Remove any previous manifests from cache.
rm -rf ${manifestDir}
mkdir ${manifestDir}

if [ -z ${CI_DEPLOY_USER} ]; then
  echo "ERROR: CI_DEPLOY_USER not defined.  Add 'gitlab-deploy-token' with 'read-registry' access to your GitLab Settings > Repository > Deploy Tokens."
  exit 1
fi

# Compute the proper URL, RELEASE_NAME for the environment.
# Must use "source" here to bring in all the variables.
source ${scriptDir}/release_name.sh

helm template  \
  --name ${RELEASE_NAME} \
  --output-dir ${manifestDir} \
  --set image.repository=${STORYBOOK_IMAGE} \
  --set image.tag=${CI_COMMIT_SHA} \
  --set ingress.url.base=${URL_ENV} \
  --set ingress.url.alt=${URL_ALT} \
  --set env.project=${PROJECT_NAME}-design \
  --debug \
  ${chartDir}

