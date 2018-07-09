const Discord = require("discord.js");
const botSettings = require("./../botSettings.json");
const fs = require("fs");
const youtube = require("../youtube.json");

module.exports.run = async (bot, message, args) => {
  const [channel_id, channel_name] = [...args];
  addChannel = (id, name) => {
    if (
      youtube.channels.filter(e => e.id === id).length > 0 ||
      youtube.channels.filter(i => i.name === name).length > 0
    ) {
      message.channel.send(
        "A channel with that ID or name already exists, do ``!list`` to see channels that are already added."
      );
    } else {
      youtube.channels.push({ name, id });
      fs.writeFile("./youtube.json", JSON.stringify(youtube));
    }
  };

  if (channel_id === undefined || channel_name === undefined) {
    message.channel.send("ID or name invalid, see !help if you need guidance.");
  } else {
    addChannel(channel_id, channel_name);
  }
};

module.exports.help = {
  name: "set"
};
