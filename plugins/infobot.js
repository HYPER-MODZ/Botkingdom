let handler = async (m, { conn, command, usedPrefix, text }) => {
  let fetch = require('node-fetch')
  let _uptime = process.uptime() * 1000
  let a = require('moment-timezone').tz('Asia/Colombo').format('HH:mm:ss') 
  let d = new Date(new Date + 3600000)
  let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let runtime = clockString(_uptime)
  let usergakdaftar = Object.keys(global.db.data.users).length
  let userdaftar = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let infonyacok = `
${sa}${kki} ${conn.user.name} ${kka}
${gy} Library : *Baileys*
${gy} Language : *Javascript*
${gy} Database : *MongoDB*
${gy} Version : *${versibot}*
${gy} Developer : *@94753943957*
${gy} Runtime : *${runtime}*
${gy} Prefix : *Multi Prefix 「 ${usedPrefix} 」*
${gy} Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
${gy} User : *${usergakdaftar}*
${gy} Register : *${userdaftar}*
${sb}
`.trim()
var as = `: ${week}, ${date}\n: ${a} (WIB)`
 //conn.sendTBL(m.chat, infonyacok, as, fla + `${command}`, `BOTKINGDOM ✨`, `https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV`, null, null, `Menu`, `${usedPrefix}menu`, null, null, null, null, m, 
     conn.sendBL(m.chat, infonyacok, as, fla + `${command}`, [[`BOTKINGDOM`, `${usedPrefix}sc`], [`Menu`, `${usedPrefix}menu`]], m,        
           {mentions: ['94753943957@s.whatsapp.net']})

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

