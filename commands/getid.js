const Discord = require("discord.js");
const botSettings = require("./../botSettings.json");
const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  name = args[0];

  axios
    .get("https://www.googleapis.com/youtube/v3/channels", {
      params: {
        part: "statistics",
        forUsername: name,
        key: botSettings.ytKey
      }
    })
    .then(function(response) {
      // handle success
      message.channel.send(response.data.items[0].id);
    })
    .catch(function(error) {
      message.channel.send("Error fetching data.");
    });
};

module.exports.help = {
  name: "getid"
};
