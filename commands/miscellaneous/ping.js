const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	config: {
        name: "ping",
        description: "PONG! Displays the api & bot latency",
        usage: ``,
        category: "miscellaneous",
        accessableby: "Members"
    },
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Show ping of the server'),
	async execute(bot, message) {
		message.channel.send("Pinging...").then(m => {
			let ping = m.createdTimestamp - message.createdTimestamp
			let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
			let response = choices[Math.floor(Math.random() * choices.length)]
	
			m.edit(`${response}: Bot Latency: \`${ping}\`, API Latency: \`${Math.round(bot.ping)}\``)
		})
	}
}
