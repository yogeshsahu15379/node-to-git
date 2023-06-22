const simpleGit = require('simple-git');
const fs = require('fs-extra');

// const repoURL = 'https://github.com/your-username/your-repo.git';
const branch = 'kuchBhi';
const timestamp = Date.now();
const projectSubPath = 'KAKA';

async function cloneRepository(repoURL) {
  try {
    await simpleGit().clone(repoURL);
    console.log('Repository cloned successfully');
  } catch (err) {
    console.error('Error cloning repository:', err);
  }
}

async function pullChanges() {
  try {
    await simpleGit().cwd(repoFolder).pull('origin', branch);
    console.log('Changes pulled successfully');
  } catch (err) {
    console.error('Error pulling changes:', err);
  }
}

async function copyExportFiles() {
  try {
    await fs.copy(`/public/export-${timestamp}`, repoFolder);
    console.log('Export files copied successfully');
  } catch (err) {
    console.error('Error copying export files:', err);
  }
}

async function commitAndPushChanges() {
  try {
    const git = simpleGit().cwd(repoFolder);
    await git.add('.');
    await git.commit('[Auto Generated message]');
    await git.push('origin', branch);
    console.log('Changes committed and pushed successfully');
  } catch (err) {
    console.error('Error committing and pushing changes:', err);
  }
}

// Entry point
const repoFolder = 'repo-folder';

cloneRepository('git@github.com:yogeshsahu15379/node-to-git.git')
  .then(() => {
    process.chdir(repoFolder);
    return pullChanges();
  })
  .then(() => copyExportFiles())
  .then(() => {
    process.chdir(projectSubPath);
    return commitAndPushChanges();
  })
  .catch((err) => console.error('Error:', err));
