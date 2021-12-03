// LIBRARY DEPENDENCIES NEEDED: discord.js, node.js
// RESOURCE DEPENDENCIES NEEDED: greets.js, embedBuilder.js, quickUtils.js

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});
const greet = require('../utilities/greets.js')
const quickUtils = require('../utilities/quickUtils.js')
const embedBuilder = require('../utilities/embedBuilder.js')
const Canvas = Discord.Canvas;

//Shows in log when client has logged in, useful for testing/debugging purposes
client.once('ready', () => {
	console.log('Ready!');
});

//Welcome embeds for new users
client.on('guildMemberAdd',member => {
    greet.WelcomeEmbed(member)
})

//Goodbye embeds for left users
client.on('guildMemberRemove',(member) => {
    greet.GoodbyeEmbed(member)
})

client.on('message', message => {
    
    //Display status of Discord bot
    if(message.content == 's.status') {
        quickUtils.status(message,client);
    }
	
    //Display membercount of server this message was sent in
    if(message.content == 's.membercount') {
        quickUtils.memCount(message);
    }
    
    /* These should be in a pile of easy commands somewhere, not inside the listener */
    //Shows an embed of the user's avatar in chat
    if(message.content.includes('s.avatar')) {
        const mention = message.mentions.members.first();
        if(mention != undefined) {
            const channel = message.channel.id;
            const user="".concat(mention.user.username,"'s Avatar");
            const avatar = mention.user.displayAvatarURL( { format: 'png', size: 512 } )
            const objs = `{"getImage":"${avatar}","getColor":"0x0099ff","getTitle":"${user}"}`;
            const avatarEmbed = embedBuilder.EmbedBuilder(objs)
            message.reply({ embed: avatarEmbed });
        }
        else {
            const channel = message.channel.id;
            const user="".concat(message.author.username,"'s Avatar");
            const avatar = message.author.displayAvatarURL( { format: 'png', size: 512 } )
            const objs = `{"getImage":"${avatar}","getColor":"0x0099ff","getTitle":"${user}"}`;
            const avatarEmbed = embedBuilder.EmbedBuilder(objs)
            message.reply({ embed: avatarEmbed });
        }
    }
	
    //Testing embeds
    if(message.content == 's.embedt') {
        const objs = '{"getImage":"https://i.imgur.com/Ntdg2yW.gif","getColor":"0x0099ff","getTitle":"Test Embed","getDesc":"Just testing the modular embeds my dudes. :ok_hand:"}';
        const testEmbed = embedBuilder.EmbedBuilder(objs)
        message.channel.send({ embed: testEmbed });
        console.log('done')
    }
	    
});

client.login('PASTE CLIENT ID HERE');
