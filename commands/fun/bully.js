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
	console.log(victima.user.id);
	if(victima.user.id == 422408402849890304) return message.channel.send("Cum să îi dau bully la bossu meu muistule");
	else if(victima.user.id == 251087166900404225) return message.channel.send("Cine zice ăla îi");
        else if(!victima) return message.channel.send("Nu pot să dau bully la nimic...");
		message.channel.send( "<@" + victima.user.id + ">" + " " + dau_bully);
    }
}
