const bully = require("../../data/bully.json");

module.exports = {
    config: {
        name: "bully",
        description: "Iti iei bully.",
        usage: "<@member>",
        category: "fun",
        accessableby: "Membru",
        aliases: ["roast"]
    },
    run: async (bot, message, args) => {
		var dau_bully = bully.bullys[Math.floor(Math.random() * bully.bullys.length)];
        let victima = message.mentions.members.first();
        if(!victima) return message.channel.send("Nu pot să dau bully la nimic...");
	if(victima = bot) return message.channel.send("dten pl mia ca nus asa prost sami dau buli singur fraiere.");
		message.channel.send( "<@" + victima.user.id + ">" + " " + dau_bully);
    }
}
