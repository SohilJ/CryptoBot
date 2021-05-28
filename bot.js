const { Client } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const bot = new Client();

bot.login(process.env.DISCORD_BOT_TOKEN);