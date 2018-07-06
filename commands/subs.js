const Discord = require("discord.js");
const botSettings = require("./../botSettings.json");
const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  /*axios
    .get("https://www.googleapis.com/youtube/v3/channels", {
      params: {
        part: "statistics",
        id: "UCEngeu7blnMQ6bOS2TRQLRw",
        key: botSettings.ytKey
      }
    })
    .then(function(response) {
      // handle success
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });*/
};

module.exports.help = {
  name: "subs"
};
