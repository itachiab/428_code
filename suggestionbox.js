const Social = require("../../structures/Social.js");
const { MessageAttachment } = require("discord.js");

class SuggestionBox extends Social {
  constructor(...args) {
    super(...args, {
      name: "suggest",
      description: "Suggest something!.",
      category: "Canvas",
      usage: "suggest <text>",
      cost: 10,
      cooldown: 10,
      loadingString: "<a:typing:397490442469376001> **{{displayName}}** put something in the suggestion box...",
      botPerms: ["ATTACH_FILES"]
    });
  }

  async run(message, [...text], level, loadingMessage) { // eslint-disable-line no-unused-vars 
    if (text.length === 0) return loadingMessage.edit("You must supply text baka!");
    await message.channel.send(new MessageAttachment(await this.client.idiotAPI.suggestion(message.author.displayAvatarURL({ format: "png", size: 256 }), text.join(" ")), "suggest.png"));
    await loadingMessage.delete();
  }
}

module.exports = SuggestionBox;