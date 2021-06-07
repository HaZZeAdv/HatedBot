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
	if(victima.user.id == 422408402849890304) return console.log("E HaZZe");
	else if(victima.user.id == 251087166900404225) return console.log("E Giusepe");
        if(!victima) return message.channel.send("Nu pot să dau bully la nimic...");
		message.channel.send( "<@" + victima.user.id + ">" + " " + dau_bully);
    }
}
