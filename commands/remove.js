const Discord = require("discord.js");
const youtube = require("../youtube.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  [name] = [...args];
  Object.keys(youtube.channels).forEach(key => {
    if (name === youtube.channels[key].name) {
      filtered_channels = youtube.channels.filter(e => e.name != name);
      console.log(filtered_channels);
      fs.writeFile("./youtube.json", JSON.stringify(filtered_channels));
    }
  });
};

module.exports.help = {
  name: "remove"
};
