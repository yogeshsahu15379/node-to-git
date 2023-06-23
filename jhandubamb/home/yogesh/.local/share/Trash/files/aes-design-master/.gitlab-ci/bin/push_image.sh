#!/busybox/ash
# Common script to push a docker image to registry.
# Called from .gitlab-ci.yml in the "build" stage

INFO_SLUG() {
  printf "\033[33m[INFO] \033[37m"$(date +"%T")"\033[0m"
}

set -ex

printf "$(INFO_SLUG) Creating docker image...\n"
# Output the Kaniko config
echo "{\"auths\":{\"$CI_REGISTRY\":{\"username\":\"$CI_REGISTRY_USER\",\"password\":\"$CI_REGISTRY_PASSWORD\"}}}" > /kaniko/.docker/config.json
# Perform the image build using Kaniko
/kaniko/executor --context $CI_PROJECT_DIR \
  --dockerfile $CI_PROJECT_DIR/.gitlab-ci/Dockerfile \
  --destination $STORYBOOK_IMAGE:$CI_COMMIT_SHA

printf "$(INFO_SLUG) Image ready.\n"
