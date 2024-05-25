import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `👊😆انت أصلاً مسجل, ولا عاوز تسجل تاني؟\n\n 📌لو هتسجل تاتي استخدم الأمر ده عشان تمسح التسجيل القديم\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `*⚠️التنسيق غير صالح*\n\n*🌴🪁 استخدم الأمر: ${usedPrefix + command} الإسم.العمر*\n*🌻🪁 مثال: ${usedPrefix + command} shadow.19*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*👊لازم تحط اسم*';
  if (!age) throw '*[❗] لازم تحط عمر عشان التسجيل يتم*';
  if (name.length >= 30) throw '😆الإسم اللي انت استخدمته أطول من اللازم ،،شوف إسم تاني';
  age = parseInt(age);
  if (age > 60) throw '*[❗] انت ازاي عايش؟👴🏻*';
  if (age < 5) throw '*[❗] إزاي الطفل بيعرف يستخدم واتساب؟😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `╭━━━ • تم التسجيل✰• ━━━
┃ *الإسم:* ${name}
┃ *العمر:* ${age} سنة
┃ *معرف التسجيل:* 
┃ ${sn}
◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|سجل|verificar|reg|registrar)$/i;
export default handler;
