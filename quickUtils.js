function status(message,client) {
    const user="JavaScript (dev) listener is active. ".concat(client.user.username);
    const uptime=client.uptime;
    const hours=parseInt(uptime/(1000*60*60)).toString()
    const mins=parseInt(uptime/(1000*60)%60).toString()
    const secs=parseInt((uptime/1000)%60).toString()
    const output=user.concat('#',client.user.discriminator,'\'s',' discord.js client has been up for ',hours,'h ',mins,'m ',secs,'s.');
    message.channel.send(output)
}

function memCount(message) {
    const memNum=message.guild.memberCount;
    const output = 'There are currently '.concat(memNum,' members in ',message.guild.name,'.');
    message.channel.send(output)
}

function brokenCommand() { return ('<a:Thisisfine:773821553888329778>') }

module.exports = { status, memCount,brokenCommand };
