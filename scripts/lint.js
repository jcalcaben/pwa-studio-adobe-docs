const glob = require('glob')


const runLinter = () => {
    console.log("Running linter");

    glob("src/pages/**/*.md", {}, (error, files)=>{
        console.log(files);
    })
}

runLinter();