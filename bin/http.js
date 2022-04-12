const fetch = require('node-fetch');

const getRepoList = async () => {
  const res = await fetch(`https://api.github.com/orgs/tohsaka888-react-cli/repos?per_page=100`)
  const data = await res.json()
  return data
}

module.exports = {
  getRepoList
}