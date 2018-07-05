const Discord = require("discord.js");
const botSettings = require("./../botSettings.json");
const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  const channel = args[0];
  axios
    .get("https://www.googleapis.com/youtube/v3/channels", {
      params: {
        part: id,
        forUsername: "GoogleDevelopers",
        key: botSettings.ytKey
      }
    })
    .then(function(response) {
      // handle success
      console.log(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

module.exports.help = {
  name: "subs"
};
