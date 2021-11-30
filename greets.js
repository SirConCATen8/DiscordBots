function WelcomeEmbed(member) {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    const greetList = [`Yahello ${member}! Wait that's not right...`,`Is it love at first sight or is ${member} just the best?`,`Hey look, ${member} is finally here!`,`Thank you for gracing us with your presence, ${member}!`,`If tomorrow never comes, at least we can rest in peace knowing ${member} joined us.`];
    const greetInd=Math.floor(Math.random() * greetList.length);
	  const greet="".concat(greetList[greetInd]);
    channel.send(greet)
    const color=0x4BFF54;
    const insTitle="".concat("Welcome to ",member.guild.name,"!");
    const insDesc="".concat("Please visit <#747127104046628885> and review the rules before making yourself look silly. If you want to add color to your name or access special channels, hit up <#783150501217828915>.");
    const insThumb="".concat(member.avatar);
    const imgList = ['https://i.imgur.com/Ntdg2yW.gif','https://i.imgur.com/4v1qRsI.gif','https://i.imgur.com/us6Nmie.gif'];
    const imgInd=Math.floor(Math.random() * imgList.length);
    const imgurl="".concat(imgList[imgInd]);
    const memberNum = "".concat(member.guild.memberCount)
    const welcomeEmbed = {
	      color: color,
	      title: insTitle,
		    description: insDesc,
		    /*thumbnail: {
			    url: member.displayAvatarURL(),
		    },*/
		    image: {
			    url: imgurl,
		    },
		    footer: {
			    text: "Server Members: ".concat(memberNum),
		    },
	  };
	  channel.send({ embed: welcomeEmbed })
	  console.log("welcomeEmbed Complete")
}

function GoodbyeEmbed(member) {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
	  const color=0x7547FF;
    const name ="".concat(member.user.username)
    const insTitle="".concat(`Goodbye ${name} :broken_heart:`);
    const descList = [`Goodbye ${name}, we may miss you.`,`Goodbye ${name}, we hardly knew you.`,`${name}... Gone, but not yet forgotten.`,`All my homies hate ${name}`,`${name} has taken the eternal sleep.`];
    const descInd=Math.floor(Math.random() * descList.length);
    const desc="".concat(descList[descInd]);
    const imgList = ['https://media.discordapp.net/attachments/783140045007093800/783140139005378571/sensei_goodbye.png'];
    const imgInd=Math.floor(Math.random() * imgList.length);
    const imgurl="".concat(imgList[imgInd]);
    const memberNum = "".concat(member.guild.memberCount)
    const goodbyeEmbed = {
        color: color,
	      title: insTitle,
		    description: desc,
		    image: {
			    url: imgurl,
		    },
		    footer: {
			    text: "Server Members: ".concat(memberNum),
		    },
	  };
	  channel.send({ embed: goodbyeEmbed })
	  console.log("goodbyeEmbed Complete")
}

module.exports = { WelcomeEmbed, GoodbyeEmbed };
