const ghpages = require('gh-pages');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const repo = GITHUB_TOKEN ? `https://chendachao:${GITHUB_TOKEN}@github.com/chendachao/stone.git` : 'https://github.com/chendachao/stone.git';

ghpages.publish('dist/stone', {
  branch: 'gh-pages',
  repo,
  user: {
    name: 'chendachao',
    email: 'chendachao@outlook.com'
  }
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('publish done');
});
