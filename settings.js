// Alwaysfauzi Devoloper Script Hikaaa

global.owner = ['6285882135288','6283171375701', '6285882135288']
global.botname = 'Perseverance'
global.author = 'My Sticker'
global.packname = 'Perseverance'
global.bodyfooter = 'Perseverance'
global.fotonya2 = "https://p4.wallpaperbetter.com/wallpaper/985/442/355/gothic-lana-del-rey-inverted-cross-wallpaper-preview.jpg"
global.namastore = "hikaaa"
global.wlcm = []
global.wlcmm = []
global.delaypushkontak = 5500
global.usePairingCode = true
global.footer = '© Perseverance'
global.idch = '120363211868027307@newsletter'
global.newsname = `hikaaa`
global.nameid = `hika666`
global.botkey = "yoau5Tt3fZQSouo",
// CPANEL SETTING

global.host = "https://ryzx.danzxxprivate.web.id"
global.application = {
  api_key: "ptla_pyDy3fo7g28JdmugHSQGsHFYOGvvZYwZidaEDfybOZp",
  c_api_key: "ptlc_Y0KUyVCzg2ve3qDZLFYBqlGEmJoLsr4vou5McOSO4tD"
}
global.eggs = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah by telegram 
global.location = '1' // id location by telegram 
global.serverCreate = {
  nestId: "5", //Nest Id panel lu
    eggId: "15", //Egg Id panel lu
  limits: {
    db: "1", //Mending ga usah diganti
    backups: "1", //Mending ga usah diganti
    allocation: "0" //Mending ga usah diganti
  },
  eggs: {
    environment: {
      "CMD_RUN": "npm start", //Sesuaiin sama eggs lu
      "GIT_ADDRESS": "",
      "BRANCH": "",
      "USERNAME": "",
      "ACCESS_TOKEN": ""
    }
  }
}

global.nodana = "081343102258" //Nomor dana
global.nogopy = "082132710183" //Nomor Gopay
global.payqris = "https://telegra.ph/file/c5f30905c2fe1d68a62bc.jpg" //Masukan link Qris / url
global.payovo = "-" //Nomor Ovo
global.limitawal = {

    premium: "Infinity",

    free: 100

}

//rpg

global.buruan = {

   ikan: 5,

   ayam: 5,

   kelinci: 5,

   domba: 5,

   sapi: 5,

   gajah: 5

}

global.rpg = {

   darahawal: 100,

   besiawal: 5,

   goldawal: 1,

   emeraldawal: 1,

   umpanawal: 1,

   potionawal: 1

}
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})