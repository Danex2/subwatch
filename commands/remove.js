const Discord = require("discord.js");
const youtube = require("../youtube.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  [name] = [...args];

  youtube.channels = youtube.channels.filter(e => e.name !== name);
  fs.writeFile("./youtube.json", JSON.stringify(youtube, null, 2));
};

module.exports.help = {
  name: "remove"
};
