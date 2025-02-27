module.exports= {
type: 'group',
command: ['tagme'],
operate: async (context) => {
const { Hikaaa, m, q:text, reply } = context;

let orang = (await Hikaaa.groupMetadata(m.chat)).participants.map(u => u.jid)
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
 Hikaaa.sendMessage(m.chat,{text: tag},{ contextInfo: { mentionedJid }},{quoted:m})
}
 }