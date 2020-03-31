const axios = require("axios");

const api = {
  getUser(username) {

      const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

      axios.get(queryUrl).then(function (response) {
        const userPic = response.data.avatar_url;
        const userEmail = ""; 
        });


      }
  }

module.exports = api;
