#!/bin/bash

# Variables
git_repo="git@github.com:yogeshsahu15379/node-to-git.git"
ssh_key="/home/yogesh/.ssh/id_ed25519"
branch_name="kuchBhi"

# Clone the repository
git clone $git_repo
cd node-to-git

# Configure SSH
mkdir -p ~/.ssh
sudo cp $ssh_key ~/.ssh/id_rsa
chmod 400 ~/.ssh/id_rsa

# pull from branch
git pull origin $branch_name

# Switch to the desired branch
git checkout -b $branch_name

# Add, commit, and push the code
git add .
git commit -m "Code update"
git push origin $branch_name

# Cleanup
rm -rf ../repo

echo "Code pushed successfully to the $branch_name branch!"