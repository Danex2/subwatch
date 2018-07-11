const Discord = require("discord.js");
const youtube = require("../youtube.json");

module.exports.run = async (bot, message, args) => {
  let names = [];
  if (youtube.channels.length === 0) {
    message.channel.send("List empty, add a channel with !set");
  } else {
    Object.keys(youtube.channels).forEach(key => {
      names.push(youtube.channels[key].name);
    });
    const embed = new Discord.RichEmbed().addField(
      "Channels",
      names.join("\n")
    );
    message.channel.send({ embed });
  }
};

module.exports.help = {
  name: "list"
};
