import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)

let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0

let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {

 conn.reply(m.chat, `*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\nFelicidades subiste de nivel sigue asi 👏\n\n▢ ${lenguajeGB.smsAutoLv2()} ${before}\n▢  ${user.level}\n▢ ${lenguajeGB.smsAutoLv4()} ${user.role}\n\n`, fkontak, m)                             
/*conn.sendButton(m.chat, ' ' + wm, `┌───⊷ ${username}
▢ ${before}
▢ ${user.level}
▢ ${user.role}
└──────────────

*`, null, `/menu`]], m)*/


let especial = ['limit', 'diamond', 'joincount', 'emerald', 'berlian', 'kyubi', 'gold', 'money', 'tiketcoin', 'stamina'].getRandom()
let especial2 = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let especial3 = ['eleksirb', 'emasbatang', 'emasbiasa', 'rubah', 'sampah', 'serigala', 'kayu', 'sword', 'umpan', 'healtmonster', 'emas', 'pancingan', 'pancing'].getRandom()
let especial4 = ['common', 'uncoommon', 'mythic', 'pet', 'gardenboxs', 'legendary'].getRandom()

let especialCant = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 8, 3, 9, 7, 9].getRandom()
let especialCant2 = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 10, 3, 11, 7, 9].getRandom()
let especialCant3 = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 10, 3, 11, 7, 9].getRandom()
let especialCant4 = [2, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 2].getRandom()

let normal = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let normal2 = ['petFood', 'makanancentaur', 'makanangriffin', 'makanankyubi', 'makanannaga', 'makananpet', 'makananphonix'  ].getRandom()
let normal3 = ['anggur', 'apel', 'jeruk', 'mangga', 'pisang'].getRandom()

let normalCant = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 
let normalCant2 = [1, 3, 2, 2, 4, 4, 2, 2, 4, 4, 5, 5, 1].getRandom() 
let normalCant3 = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 

if (user.level == 5){
m.reply(` 5!!* 🏆
𓃠 *${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1

}else if (user.level == 10){
m.reply(` 10!!🏆
𓃠 *${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1

}else if (user.level == 15){
m.reply(` 15!! 🏆
𓃠 *${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2

}else if (user.level == 20){
m.reply(`*20!!* 🏆
𓃠 *${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2

}else if (user.level == 25){
m.reply(`*${lenguajeGB.smsAutoLv7()} 25!!* 🏆
𓃠 *${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3

}else if (user.level == 30){
m.reply(`*30!!* 🏆
𓃠 *${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3

}else if (user.level == 35){
m.reply(`35!!🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4

}else if (user.level == 40){
m.reply(`*40!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4

}else if (user.level == 45){
m.reply(`*45!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4

}else if (user.level == 50){
m.reply(`50!! 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5

}else if (user.level == 55){
m.reply(`55!! 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5

}else if (user.level == 60){
m.reply(`60!! 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5

}else if (user.level == 65){
m.reply(`65!! 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5

}else if (user.level == 70){
m.reply(`*70!!* 🏆
𓃠 *${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6

}else if (user.level == 75){
m.reply(`*75!!* 🏆
𓃠 *${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6

}else if (user.level == 80){
m.reply(`*80!!* 🏆
𓃠 *${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7

}else if (user.level == 85){
m.reply(`85!! 🏆
𓃠 *${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7

}else if (user.level == 90){
m.reply(` 90!! 🏆
𓃠 *${especialCant * 8} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 8} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 8} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 8} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 8
user[especial2] += especialCant2 * 8
user[especial3] += especialCant3 * 8
user[especial4] += especialCant4 * 8

}else if (user.level == 95){
m.reply(`95!! 🏆
𓃠 *${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10

}else if (user.level == 100){
m.reply(`*100!!* 🏆
𓃠 *${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`)
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10

}else{        

}

}}                
//export const disabled = false 