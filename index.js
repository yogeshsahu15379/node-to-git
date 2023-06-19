const simpleGit = require("simple-git");

const git = simpleGit({
  baseDir: "./",
});

// git
//   .add(".")
//   .then(() => {
//     console.log("Files staged for commit.");
//   })
//   .catch((err) => {
//     console.error("Error staging files:", err);
//   });

// git
//   .commit("adding data")
//   .then(() => {
//     console.log("Changes committed.");
//   })
//   .catch((err) => {
//     console.error("Error committing changes:", err);
//   });

// git.push('origin', 'main')
//   .then(() => {
//     console.log('Changes pushed to remote repository.');
//   })
//   .catch((err) => {
//     console.error('Error pushing changes:', err);
//   });

try{
simpleGit()
   .add('./*')
   .commit('first commit!')
   .addRemote('origin', 'git@github.com:yogeshsahu15379/node-to-git.git')
   .push(['-u', 'origin', 'master'], () => console.log('done'));
}catch(error){
    console.log(error);
}