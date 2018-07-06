const Discord = require("discord.js");
const youtube = require("../youtube.json");

module.exports.run = async (bot, message, args) => {
  /*Object.keys(youtube.channels).forEach(key => {
    let names = youtube.channels[key].name;
    message.channel.send(names);
  });*/
  console.log(youtube.channels);
};

module.exports.help = {
  name: "list"
};
