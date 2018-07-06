const Discord = require("discord.js");
const youtube = require("../youtube.json");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Commands")
    .addField("$list", "list the current channels added")
    .addField(
      "$set <channel id> <name>",
      "adds a channel to the list, name can be any name you want to give the channel you're tracking."
    )
    .addField("$subs <name>", "display the amount of subs a channel has");
  message.channel.send({ embed });
};

module.exports.help = {
  name: "help"
};
