const { get } = require('callback-fetch');

class GithubClient {
  
   fetchRepositoryData = (url, callback) => {
    const stringValue = `{"url": "https://api.github.com/repos/${url}"}`
    const objectValue = JSON.parse(stringValue)
    get(objectValue.url, (body) => {
      return callback(JSON.parse(body))
    })
  }
  
}

module.exports = GithubClient