require('dotenv').config()
const { Client, Events, GatewayIntentBits, EmbedBuilder, PermissionsBitField } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', async message=>{
    if (message.content.toLowerCase() == '/tugas') {
        await message.channel.send("Pong")
    }
})

client.login(process.env.TOKEN);