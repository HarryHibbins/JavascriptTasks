const { get } = require('callback-fetch');

const fetchJson = (url, callback) => {
  get(url, (body) => {
    return callback(JSON.parse(body));
  });

};
fetchJson("https://jsonplaceholder.typicode.com/todos", (response) => {
  const result = response
  console.log(response);
});

module.exports = fetchJson;
