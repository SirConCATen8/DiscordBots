//DEPENDENCIES: discord.js

const Discord = require('discord.js');

const options = {
    "Basic":["getColor","getTitle","getDesc"],
    "Basic+Img":["getColor","getTitle","getDesc","getImage"],
    "Greet":["getColor","getTitle","getDesc","getImage","getFooter"],
    "Full":["getColor","getTitle","getDesc","getThumbImg","getField","getFieldContent","getFieldAdd","getFieldContentAdd","getImage","getFooter"]
}
const optionReq = '{"getColor":"Please enter color in HEX format.","getTitle":"Please enter the title of the embed.","getTitleURL":"Please enter a URL.","getAuthorTitle":"Please enter the author title.","getAuthorImg":"Please enter a URL for the author image.","getAuthorURL":"Please enter a URL for the author title.","getDesc":"Please enter the body of the embed.","getThumbImg":"Please enter a URL for the thumbnail image.","getField":"Please enter the title of the first field.","getFieldContent":"Please enter the body of the first field.","getFieldAdd":"Please enter the title of the additional field.","getFieldContentAdd":"Please enter the body of the additional field.","getImage":"Please enter the URL of the main image.","getFooter":"Please enter the footer text."}'


function Secretary(input) {
    
}

function EmbedBuilder(obj) {
    const modEmbed = new Discord.MessageEmbed()
    var sifter = JSON.parse(obj, function (key, value) {
    if (key == "getColor") { modEmbed.setColor(value) }
    if (key == "getTitle") { modEmbed.setTitle(value) }
    if (key == "getTitleURL") { modEmbed.setURL(value) }
    
    if (key == "getAuthorTitle") { modEmbed.setAuthor(value) }
    /*
    const getAuthorImg = obj.getAuthorImg;
    modEmbed.setAuthor(getAuthorTitle, getAuthorImg)
    }
    */
    if (key == "getDesc") { modEmbed.setDescription(value) }
    if (key == "getThumbImg") { modEmbed.setThumbnail(value) }
    
    if (key == "getField") {
    const getField = obj.getField;
    const getFieldContent = obj.getFieldContent;
    modEmbed.addField(getField, getFieldContent, true)
    }
    
    if (key == "getFieldAdd") {
    const getField2 = obj.getFieldAdd;
    const getFieldContent2 = obj.getFieldContentAdd;
    modEmbed.addField(getField2, getFieldContent2, true)
    }
    
    if (key == "getImage") { modEmbed.setImage(value) }
    if (key == "Timestamp") { modEmbed.setTimestamp(new Date()) }
    
    if (key == "getFooter") {
    const getFooter = obj.getFooter;
    const getFooterImg = obj.getFooterImg;
    modEmbed.setFooter(getFooter, getFooterImg);
    }
    });
    
return(modEmbed);
}

module.exports = {EmbedBuilder};
