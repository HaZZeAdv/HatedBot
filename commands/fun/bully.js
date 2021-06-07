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
	if(victima.user.id = "422408402849890304") return message.channel.send("Cum drq sa-i dai bully la bossu' meu ba muistule");
	if(victima.user.id = "251087166900404225") return message.channel.send("Cine zice ăla îi");
        if(!victima) return message.channel.send("Nu pot să dau bully la nimic...");
		message.channel.send( "<@" + victima.user.id + ">" + " " + dau_bully);
    }
}
