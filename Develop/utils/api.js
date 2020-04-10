const api = {
    getUser(data) {
        console.log(`Hello ${data.userName}`)

        return queryURL = `https://api.github.com/users/${data.userName}/repos?per_page=100`;

    }
  };
  
  module.exports = api;