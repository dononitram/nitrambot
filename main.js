require("dotenv").config();
const Bot = require("./bot");

// bot.js
const bot = new Bot(process.env.TOKEN);

async function ping(interaction) {
  await interaction.reply("Pong!");
}

async function hello(interaction) {
  await interaction.reply("Hello!");
}

async function help(interaction) {
  await interaction.reply("Nah");
}

bot.addSlashCommands([
  ["ping", "Replies with Pong!", (interaction) => ping(interaction)],
  ["hello", "Replies with Hello!", (interaction) => hello(interaction)],
  ["help", "Replies with Help!", (interaction) => help(interaction)],
]);

bot.addCommands([
  ["!ping", (interaction) => ping(interaction)],
  ["!hello", (interaction) => hello(interaction)],
  ["!help", (interaction) => help(interaction)],
]);

// Start the bot
bot.start();
