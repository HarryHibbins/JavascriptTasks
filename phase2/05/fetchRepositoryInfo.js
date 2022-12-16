const { get } = require('callback-fetch');

const fetchRepositoryInfo = (url, callback) => {
  const stringValue = `{"url": "https://api.github.com/repos/${url}"}`
  const objectValue = JSON.parse(stringValue)
  get(objectValue.url, (body) => {
    return callback(JSON.parse(body))
  })
}

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});

module.exports = fetchRepositoryInfo;
