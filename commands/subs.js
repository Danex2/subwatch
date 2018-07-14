const Discord = require("discord.js");
const botSettings = require("./../botSettings.json");
const axios = require("axios");
const youtube = require("../youtube.json");

module.exports.run = async (bot, message, args) => {
  name = args[0];
  const result = youtube.channels.find(channel_id => channel_id.name === name)
    .id;

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  if (result === undefined) {
    message.channel.send("No channel found with that name.");
  } else {
    axios
      .get("https://www.googleapis.com/youtube/v3/channels", {
        params: {
          part: "statistics",
          id: result,
          key: botSettings.ytKey
        }
      })
      .then(function(response) {
        // handle success
        message.channel.send(
          `${name} has ${numberWithCommas(
            response.data.items[0].statistics.subscriberCount
          )} subscribers!`
        );
      })
      .catch(function(error) {
        message.channel.send("Error fetching data.");
      });
  }
};

module.exports.help = {
  name: "subs"
};
