const { get } = require('callback-fetch');


class Github {
  constructor(client){
    this.client = client
    this.repoData = {}
  }
  
  fetch(url) {
    this.client.fetchRepositoryData(url, (repositoryData) => {
      this.repoData = repositoryData;
    });
  }

  getRepoData(){
    return this.repoData;
  }

  
}

module.exports = Github