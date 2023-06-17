const Discord = require("discord.js"); //discord.js v13
const config = require(`./config.json`);
const client = new Discord.Client({
    shards: "auto",
    allowedMentions: { parse: [ ], repliedUser: false },
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
});
//Start the Bot
client.login(process.env.token)

//we gotta adjust this, so we only require the file once the bot is ready!
client.on("ready", () => {
    console.log(`Logged in ${client.user.tag}`)
    //first we need to require the global.js file which we gonna create!
    require("./global.js")(client); //pass in client to pull the file
})


/**
 * @WELCOME_EVERYONE
 * I AM BACK!
 * Sad news... I updated to windows 11 and now...
 * my mic is not working anymore... but i dont wanna stop making tutorials so here we go!
 * A FAST AND SIMPLE GLOBAL BOT TUTORIAL!
 * 
 * I setupped a index file with base data and a config.json with the token and prefix (which we wont need)
 * CODE WILL BE ON:  https://github.com/kentjuno7z/global-chat-discord-bot
 */







/**
 * @INFO
 * Bot Coded by PNV | Lamdev#3385 | https://discord.gg/phonguoiviet
 * @INFO
 * Work for Lamdev | https://github.com/kentjuno7z/global-chat-discord-bot
 * @INFO
 * Please mention Him / Lamdev, when using this Code!
 * @INFO
 */