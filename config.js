import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['94775418384', '⬘⬔⬖ 𝓚𝓐𝓥𝓘𝓨𝓐-𝓞𝓕𝓒 ⬗⬕⬙', true],
  ['94775418384', '⬘⬔⬖ 𝓚𝓐𝓥𝓘𝓨𝓐-𝓞𝓕𝓒 ⬗⬕⬙', true],
  ['94775418384', '⬘⬔⬖ 𝓚𝓐𝓥𝓘𝓨𝓐-𝓞𝓕𝓒 ⬗⬕⬙', true],
  ['94775418384', '⬘⬔⬖ 𝓚𝓐𝓥𝓘𝓨𝓐-𝓞𝓕𝓒 ⬗⬕⬙', true],
  ['94775418384', '⬘⬔⬖ 𝓚𝓐𝓥𝓘𝓨𝓐-𝓞𝓕𝓒 ⬗⬕⬙', true],
  ['94775418384']
]
global.suittag =['94775418384']
global.mods = ['94775418384']
global.prems = ['94775418384'], 
global.prems = ['94775418384'],
global.APIs = { 

  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
 
global.APIKeys = { 
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

global.packname = '✿༺ 𝒦𝒜𝒱𝐼𝒴𝒜 𝒪𝐹𝒞 𝐵𝒪𝒯 ༻✿'
global.author = '⬘⬔⬖ 𝓚𝓐𝓥𝓘𝓨𝓐-𝓞𝓕𝓒 ⬗⬕⬙'
global.vs = '1.10.90'
global.version = vs
global.gt = '✿༺ 𝒦𝒜𝒱𝐼𝒴𝒜 𝒪𝐹𝒞 𝐵𝒪𝒯 ༻✿'
global.hadesbot = gt
global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt
global.ig = 'https://www.instagram'
global.hadesig = ig
global.md = 'https://github.com/kaviyaofc1.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/HW0irZWSplaE5vUWpQeRAI'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/HW0irZWSplaE5vUWpQeRAI'
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*'
global.resultado = rg
global.ag = '*⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️*'
global.advertencia = ag
global.iig = '*📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ*✨'
global.informacion = iig
global.fg = '*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*'
global.fallo = fg
global.mg = '*❗ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʟᴏ ʜᴀ ᴜsᴀᴅᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*'
global.mal = mg
global.eeg = '*📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩*'
global.envio = eeg
global.eg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*'
global.exito = eg

global.wm = '©ᴏғᴄ-ᴋᴀᴠɪʏᴀ﹏✍\n⫷✿༺ 𝒦𝒜𝒱𝐼𝒴𝒜 𝒪𝐹𝒞 𝐵𝒪𝒯 ༻✿\n'
global.igfg = '✿༺ 𝒦𝒜𝒱𝐼𝒴𝒜 𝒪𝐹𝒞 𝐵𝒪𝒯 ༻✿'
global.wait = '⌛_✿༺ 𝐿𝒪𝒜𝒟𝐼𝒩𝒢 ༻✿..._\n▰▰▰▱▱▱▱▱▱'

global.imagen1 = fs.readFileSync('./src/Menuxx.jpg')
global.imagen4 = fs.readFileSync('./src/Menuxx.jpg')
global.imagen2 = fs.readFileSync('./src/Menuxx.jpg') 
global.imagen3 = fs.readFileSync('./src/Menuxx.jpg')

global.mods = [] 

global.multiplier = 65

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
