const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="olajidechristopher927@gmail.com"
global.location="Ibadan,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348084820714" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084820714";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348084820714,234xxxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_53_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg1LFxuICAgICAgICA5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR2RtVmxFNmd2WHZDeUk2NEFid3F3c2tsQ0NRSWZXMVVVUUtOUlplTTdOUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDdUd0JFSGxUM3lodkJrZk9xVXZwZ1wiLFxuICBcInBob25lSWRcIjogXCJjYTQwNTBkZi05MjM0LTQ1YzctYjk4Ny03NmJiMjgxZmY2YThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgNDEsXG4gICAgICAyMzMsXG4gICAgICA3NixcbiAgICAgIDUyLFxuICAgICAgNjcsXG4gICAgICAyNDEsXG4gICAgICAzNyxcbiAgICAgIDI1MyxcbiAgICAgIDQwLFxuICAgICAgMjAyLFxuICAgICAgMTIwLFxuICAgICAgNzEsXG4gICAgICAyMTMsXG4gICAgICAyMjYsXG4gICAgICAyMzQsXG4gICAgICAyMzIsXG4gICAgICAxMjYsXG4gICAgICA3MixcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgNzIsXG4gICAgICAxMyxcbiAgICAgIDEwOSxcbiAgICAgIDcwLFxuICAgICAgMjEyLFxuICAgICAgNTUsXG4gICAgICA3MixcbiAgICAgIDIyNixcbiAgICAgIDE5OCxcbiAgICAgIDM3LFxuICAgICAgMTYzLFxuICAgICAgMTMwLFxuICAgICAgMTYwLFxuICAgICAgOTgsXG4gICAgICAzMSxcbiAgICAgIDY4LFxuICAgICAgMjA0LFxuICAgICAgMTQyLFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUtYU0E3UzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODQ4MjA3MTQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA3OTk3MjIxMTMwMzI1OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFNCemE0REVQanZ3cklHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQNEVSbTNyNHNOdHFhOEV5VEFoZGcyMitydWZaOWVwOUFrM2ZvODJ2MTFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklJWVlmNEJ3VjJaQ2E1TG92L0w2R0IwSUwyVVg2N2JDQzVpRUNOc2ZRaFkzaE9vaXlqaDlZNUxFQlNzUWRPQzdVVk5QQ21YZUE0NjhMZVI4R3hCN0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklpWHB3RHQ4MzdXWGR3RzFnelUwVkpjWU56WUFYY0VwYVFBUjZ5c0orMjJ4cjQ0cmJjVzJjY2Z0aXhXY3U2WXd4eDhKbTU3bWtpcjVhY1REVWV5VURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODQ4MjA3MTQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY1NjYwMTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "power by chris tech" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Chris",
  packname: process.env.PACK_NAME || "Chris Tech",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x chris tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "CHRIS TECH"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 4,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
