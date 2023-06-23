#!/usr/bin/env bash
# Common script to deploy a built image to a Kubernetes cluster.
# When calling this script, be sure to set the "environment:" values.
# Called from .gitlab-ci.yml in the "deploy" stage

INFO_SLUG() {
  printf "\033[33m[INFO] \033[37m"$(date +"%T")"\033[0m"
}

set -ex

# Create the Kubernetes manifests to be applied.
# Need to call via 'source' since create-manifests can update variables.
source .gitlab-ci/bin/create-manifests.sh

namespace=$([ ${KUBE_NAMESPACE} ] && echo "${KUBE_NAMESPACE}" || echo "${PROJECT_NAME}")

# Create a Docker Registry secret (if it doesn't exist) so we can pull images
# via imagePullSecrets. This depends on a deploy token having been created
# with name gitlab-deploy-token. See the note about the special naming at
# https://gitlab.com/help/user/project/deploy_tokens/index#read-container-registry-images
kubectl get secret -n ${namespace} gitlab-registry-secret-${PROJECT_NAME}-design || \
  kubectl create secret -n ${namespace} docker-registry gitlab-registry-secret-${PROJECT_NAME}-design \
    --docker-server=${CI_REGISTRY} \
    --docker-username=${CI_DEPLOY_USER} \
    --docker-password=${CI_DEPLOY_PASSWORD} \
    --docker-email=${GITLAB_USER_EMAIL}

# Send helm manifests to kubectl to create/update the pods.
kubectl apply --recursive --filename .manifests --namespace ${namespace}
