const { get } = require('callback-fetch');

// const url = 'https://api.github.com/repos/sinatra/sinatra';

const fetchJson = (url, callback) => {
  result = get(url, handleReceivedResponse);
  console.log(result)

};

const handleReceivedResponse = (body) => {
  const responseObject = JSON.parse(body)
  //  console.log(responseObject)
}

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})
module.exports = fetchJson;

