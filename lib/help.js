const moment = require("moment-timezone");
const p = 0

exports.allmenu = (sender, pushname, prefix) => {
	return `❏「 OWNER 」	
0${p+=1}. ${prefix}ping
0${p+=1}. ${prefix}self
0${p+=1}. ${prefix}public
0${p+=1}. ${prefix}runtime
0${p+=1}. ${prefix}setthumb
❏「 TOOLS 」	
0${p+=1}. ${prefix}jadibot
0${p+=1}. ${prefix}stopjadibot
0${p+=1}. ${prefix}listjadibot
❏「 SEARCH 」
0${p+=1}. ${prefix}lirik
${p+=1}. ${prefix}gimage	
${p+=1}. ${prefix}ytsearch
❏「 DOWLOAD 」	
${p+=1}. ${prefix}play
${p+=1}. ${prefix}tiktok
${p+=1}. ${prefix}ytmp3
${p+=1}. ${prefix}ytmp4
${p+=1}. ${prefix}mediafire
❏「 MEDIA 」	
${p+=1}. ${prefix}attp
${p+=1}. ${prefix}toimg
${p+=1}. ${prefix}semoji
${p+=1}. ${prefix}sticker
❏「 GROUP 」	
${p+=1}. ${prefix}welcome`
}

