const ghpages = require('gh-pages');

ghpages.publish('dist/stone', {
  branch: 'gh-pages',
  repo: 'https://$GITHUB_TOKEN@github.com/chendachao/stone.git',
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
