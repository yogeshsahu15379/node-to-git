#!/usr/bin/env bash
# Compute the proper URL and RELEASE_NAME for the environment.
#
# Call this via `source release_name.sh` to ensure variables are set.
#
# Used to convert a long branch name into a JIRA ticket number url.
# Example, for JIRA issue 123
# Branch Name would be "issue/123-title"
#   RELEASE_NAME: PROJECT_NAME-issue-123
#   URL_ENV: issue-123.PROJECT_NAME

# Bring in the helper functions used in other scripts.
source "bin/.helper"

# Name used for actual deployment and pods.
envName=$(env_name)
kubeName="design-$(kube_name $envName)"
export RELEASE_NAME="design-${PROJECT_NAME}-${kubeName}"

# This is the primary human readable URL.
# Remove subdomain if in master environment.
if [ "$kubeName" == "master" ]; then
  export URL_ENV="design-${PROJECT_NAME}"
else
  export URL_ENV="${kubeName}-${PROJECT_NAME}"
fi

# This is the URL used in .gitlab-ci.yml for branch environments.
commitHash=${CI_COMMIT_SHORT_SHA:-$(git rev-parse --short HEAD)}
export URL_ALT="${commitHash}-${PROJECT_NAME}"
