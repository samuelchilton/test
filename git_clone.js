const git = require('simple-git')();
const url = require('url');

this.gitURL = 'https://github.com/hurlbertlab/dietdatabase';
this.localPath = `./dietDatabase`;

this.callback = () => {
    console.log('DONE')
}

git.clone(this.gitURL, this.localPath, this.options, this.callback);
