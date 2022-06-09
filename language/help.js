/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`Selamat ${salam} kak ${pushname}

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Anda Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _Selamat ${salam} kak ${pushname}_

  *⏰ Time Server : ${time}*
  *📚 List Menu : ${botname}*

  *GROUP MENU*
  - ❏ ${prefix}linkgroup
  - ❏ ${prefix}ephemeral [option]
  - ❏ ${prefix}setppgc
  - ❏ ${prefix}setname 
  - ❏ ${prefix}setdesc 
  - ❏ ${prefix}group [option]
  - ❏ ${prefix}editinfo [option]
  - ❏ ${prefix}add @user
  - ❏ ${prefix}kick @user
  - ❏ ${prefix}hidetag 
  - ❏ ${prefix}tagall 
  - ❏ ${prefix}antilink [on/off]
  - ❏ ${prefix}mute [on/off]
  - ❏ ${prefix}promote @user
  - ❏ ${prefix}demote @user
  - ❏ ${prefix}vote 
  - ❏ ${prefix}devote
  - ❏ ${prefix}upvote
  - ❏ ${prefix}cekvote
  - ❏ ${prefix}hapusvote
  
  *DOWNLOADER MENU*
  - ❏ ${prefix}tiktoknowm 
  - ❏ ${prefix}tiktokwm 
  - ❏ ${prefix}tiktokmp3 
  - ❏ ${prefix}instagram 
  - ❏ ${prefix}twitter 
  - ❏ ${prefix}twittermp3 
  - ❏ ${prefix}facebook 
  - ❏ ${prefix}pinterestdl 
  - ❏ ${prefix}ytmp3 
  - ❏ ${prefix}ytmp4 
  - ❏ ${prefix}getmusic 
  - ❏ ${prefix}getvideo 
  - ❏ ${prefix}umma 
  - ❏ ${prefix}joox 
  - ❏ ${prefix}soundcloud 
  
  *TELE STICK MENU*
  - ❏ ${prefix}gurastick
  - ❏ ${prefix}dogestick
  - ❏ ${prefix}bucinstick
  - ❏ ${prefix}patrick
  
  *RANDOM MENU*
  - ❏ ${prefix}coffe
  - ❏ ${prefix}quotesanime
  - ❏ ${prefix}couple
  - ❏ ${prefix}darkjokes
  
  *GAME & FUN MENU*
  - ❏ ${prefix}simih
  - ❏ ${prefix}bagaimanakah
  - ❏ ${prefix}kapankah
  - ❏ ${prefix}apakah
  - ❏ ${prefix}bisakah
  - ❏ ${prefix}rate
  - ❏ ${prefix}wangy
  - ❏ ${prefix}gantengcek
  - ❏ ${prefix}cekganteng
  - ❏ ${prefix}cantikcek
  - ❏ ${prefix}cekcantik
  - ❏ ${prefix}halah
  - ❏ ${prefix}hilih
  - ❏ ${prefix}huluh
  - ❏ ${prefix}heleh
  - ❏ ${prefix}holoh
  - ❏ ${prefix}jadian
  - ❏ ${prefix}jodohku
  - ❏ ${prefix}tictactoe
  - ❏ ${prefix}delttt
  - ❏ ${prefix}family100
  - ❏ ${prefix}tebak [option]
  - ❏ ${prefix}math [mode]
  - ❏ ${prefix}suitpvp [@tag]

  *PRIMBON MENU*
  - ❏ ${prefix}nomorhoki
  - ❏ ${prefix}artimimpi
  - ❏ ${prefix}artinama
  - ❏ ${prefix}ramaljodoh
  - ❏ ${prefix}ramaljodohbali
  - ❏ ${prefix}suamiistri
  - ❏ ${prefix}ramalcinta
  - ❏ ${prefix}cocoknama
  - ❏ ${prefix}pasangan
  - ❏ ${prefix}jadiannikah
  - ❏ ${prefix}sifatusaha
  - ❏ ${prefix}rezeki
  - ❏ ${prefix}pekerjaan
  - ❏ ${prefix}nasib
  - ❏ ${prefix}penyakit
  - ❏ ${prefix}tarot
  - ❏ ${prefix}fengshui
  - ❏ ${prefix}haribaik
  - ❏ ${prefix}harisangar
  - ❏ ${prefix}harisial
  - ❏ ${prefix}nagahari
  - ❏ ${prefix}arahrezeki
  - ❏ ${prefix}peruntungan
  - ❏ ${prefix}weton
  - ❏ ${prefix}karakter
  - ❏ ${prefix}keberuntungan
  - ❏ ${prefix}memancing
  - ❏ ${prefix}masasubur
  - ❏ ${prefix}zodiak
  - ❏ ${prefix}shio
  
  *CONVERT MENU*
  - ❏ ${prefix}toimage
  - ❏ ${prefix}removebg
  - ❏ ${prefix}sticker
  - ❏ ${prefix}emojimix
  - ❏ ${prefix}tovideo
  - ❏ ${prefix}togif
  - ❏ ${prefix}tourl
  - ❏ ${prefix}tovn
  - ❏ ${prefix}tomp3
  - ❏ ${prefix}toaudio
  - ❏ ${prefix}ebinary
  - ❏ ${prefix}dbinary
  - ❏ ${prefix}styletext
  - ❏ ${prefix}smeme
  
  *MAIN MENU*
  - ❏ ${prefix}ping
  - ❏ ${prefix}runtime
  - ❏ ${prefix}speed
  - ❏ ${prefix}owner
  - ❏ ${prefix}menu
  - ❏ ${prefix}delete
  - ❏ ${prefix}infochat
  - ❏ ${prefix}quoted
  - ❏ ${prefix}listpc
  - ❏ ${prefix}listgc
  - ❏ ${prefix}listonline
  
  *DATABASE MENU*
  - ❏ ${prefix}setcmd
  - ❏ ${prefix}listcmd
  - ❏ ${prefix}delcmd
  - ❏ ${prefix}lockcmd
  - ❏ ${prefix}addmsg
  - ❏ ${prefix}listmsg
  - ❏ ${prefix}getmsg
  - ❏ ${prefix}delmsg
  
  *ANONYMOUS MENU*
  - ❏ ${prefix}anonymous
  - ❏ ${prefix}start
  - ❏ ${prefix}next
  - ❏ ${prefix}keluar
  - ❏ ${prefix}sendkontak
  
  *ISLAMIC MENU*
  - ❏ ${prefix}iqra
  - ❏ ${prefix}hadist
  - ❏ ${prefix}alquran
  - ❏ ${prefix}juzamma
  - ❏ ${prefix}tafsirsurah
  
  *OWNER MENU*
  - ❏ ${prefix}react [emoji]
  - ❏ ${prefix}chat [option]
  - ❏ ${prefix}join [link]
  - ❏ ${prefix}leave
  - ❏ ${prefix}block @user
  - ❏ ${prefix}unblock @user
  - ❏ ${prefix}bcgroup 
  - ❏ ${prefix}bcall 
  - ❏ ${prefix}setppbot  
  - ❏ ${prefix}setexif
  - ❏ ${prefix}setmenu
  - ❏ ${prefix}setallmenu
  
  *THANKS TO*
  ♚ MARGARETA 
  ☻ ALL-MEMBERs
  `
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *DONATE* 」—————

Haii kak, mau donasi iya?? 

إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ وَأَقْرَضُوا اللَّهَ قَرْضًا حَسَنًا يُضَاعَفُ لَهُمْ وَلَهُمْ أَجْرٌ كَرِيمٌ

Artinya: “Sesungguhnya orang-orang yang bersedekah[donasi] baik laki-laki maupun perempuan dan meminjamkan kepada Allah dengan pinjaman yang baik, niscaya akan dilipatgandakan (pahala) kepada mereka dan bagi mereka pahala yang banyak." (QS. Al-Hadid: 18)

Terimakasih!!😊

—————「 *SEWA* 」—————

  *_SEWA BOT_* 
  •➢ Sewa Bot 5k (1 bulan)
  •➢ Sewa Bot 25k (Permanen)

  *Minatt??? Langsung chat owner aja kak!?*

  *Contact person Owner* :
  wa.me/${ownernomer}
`
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
  *GROUP MENU*
  - ❏ ${prefix}linkgroup
  - ❏ ${prefix}ephemeral [option]
  - ❏ ${prefix}setppgc  
  - ❏ ${prefix}setname 
  - ❏ ${prefix}setdesc 
  - ❏ ${prefix}group [option]
  - ❏ ${prefix}editinfo [option]
  - ❏ ${prefix}add @user
  - ❏ ${prefix}kick @user
  - ❏ ${prefix}hidetag 
  - ❏ ${prefix}tagall 
  - ❏ ${prefix}antilink [on/off]
  - ❏ ${prefix}mute [on/off]
  - ❏ ${prefix}promote @user
  - ❏ ${prefix}demote @user
  - ❏ ${prefix}vote 
  - ❏ ${prefix}devote
  - ❏ ${prefix}upvote
  - ❏ ${prefix}cekvote
  - ❏ ${prefix}hapusvote
  `
}

exports.downloadermenu = (prefix) => {
	return`
  *DOWNLOADER MENU*
  - ❏ ${prefix}tiktoknowm 
  - ❏ ${prefix}tiktokwm 
  - ❏ ${prefix}tiktokmp3 
  - ❏ ${prefix}instagram 
  - ❏ ${prefix}twitter 
  - ❏ ${prefix}twittermp3 
  - ❏ ${prefix}facebook 
  - ❏ ${prefix}pinterestdl 
  - ❏ ${prefix}ytmp3 
  - ❏ ${prefix}ytmp4 
  - ❏ ${prefix}getmusic 
  - ❏ ${prefix}getvideo 
  - ❏ ${prefix}umma 
  - ❏ ${prefix}joox 
  - ❏ ${prefix}soundcloud 
  `
}

exports.telestickmenu = (prefix) => {
	return`
  *TELE STICK MENU*
  - ❏ ${prefix}gurastick
  - ❏ ${prefix}dogestick
  - ❏ ${prefix}bucinstick
  - ❏ ${prefix}patrick
`
}

exports.randommenu = (prefix) => {
	return`
  *RANDOM MENU*
  - ❏ ${prefix}coffe
  - ❏ ${prefix}quotesanime
  - ❏ ${prefix}couple
  - ❏ ${prefix}darkjokes
  `
}

exports.funmenu = (prefix) => {
	return`
  *GAME & FUN MENU*
  - ❏ ${prefix}simih
  - ❏ ${prefix}bagaimanakah
  - ❏ ${prefix}kapankah
  - ❏ ${prefix}apakah
  - ❏ ${prefix}bisakah
  - ❏ ${prefix}rate
  - ❏ ${prefix}wangy
  - ❏ ${prefix}gantengcek
  - ❏ ${prefix}cekganteng
  - ❏ ${prefix}cantikcek
  - ❏ ${prefix}cekcantik
  - ❏ ${prefix}halah
  - ❏ ${prefix}hilih
  - ❏ ${prefix}huluh
  - ❏ ${prefix}heleh
  - ❏ ${prefix}holoh
  - ❏ ${prefix}jadian
  - ❏ ${prefix}jodohku
  - ❏ ${prefix}tictactoe
  - ❏ ${prefix}delttt
  - ❏ ${prefix}family100
  - ❏ ${prefix}tebak
  - ❏ ${prefix}math
  - ❏ ${prefix}suitpvp [@tag]
  `
}

exports.primbonmenu = (prefix) => {
	return`
  *PRIMBON MENU*
  - ❏ ${prefix}nomorhoki
  - ❏ ${prefix}artimimpi
  - ❏ ${prefix}artinama
  - ❏ ${prefix}ramaljodoh
  - ❏ ${prefix}ramaljodohbali
  - ❏ ${prefix}suamiistri
  - ❏ ${prefix}ramalcinta
  - ❏ ${prefix}cocoknama
  - ❏ ${prefix}pasangan
  - ❏ ${prefix}jadiannikah
  - ❏ ${prefix}sifatusaha
  - ❏ ${prefix}rezeki
  - ❏ ${prefix}pekerjaan
  - ❏ ${prefix}nasib
  - ❏ ${prefix}penyakit
  - ❏ ${prefix}tarot
  - ❏ ${prefix}fengshui
  - ❏ ${prefix}haribaik
  - ❏ ${prefix}harisangar
  - ❏ ${prefix}harisial
  - ❏ ${prefix}nagahari
  - ❏ ${prefix}arahrezeki
  - ❏ ${prefix}peruntungan
  - ❏ ${prefix}weton
  - ❏ ${prefix}karakter
  - ❏ ${prefix}keberuntungan
  - ❏ ${prefix}memancing
  - ❏ ${prefix}masasubur
  - ❏ ${prefix}zodiak
  - ❏ ${prefix}shio
  `
}

exports.convertmenu = (prefix) => {
	return`
  *CONVERT MENU*
  - ❏ ${prefix}toimage
  - ❏ ${prefix}removebg
  - ❏ ${prefix}sticker
  - ❏ ${prefix}emojimix
  - ❏ ${prefix}tovideo
  - ❏ ${prefix}togif
  - ❏ ${prefix}tourl
  - ❏ ${prefix}tovn
  - ❏ ${prefix}tomp3
  - ❏ ${prefix}toaudio
  - ❏ ${prefix}ebinary
  - ❏ ${prefix}dbinary
  - ❏ ${prefix}styletext
  `
}

exports.mainmenu = (prefix) => {
	return`
  *MAIN MENU*
  - ❏ ${prefix}script
  - ❏ ${prefix}ping
  - ❏ ${prefix}runtime
  - ❏ ${prefix}speed
  - ❏ ${prefix}owner
  - ❏ ${prefix}menu
  - ❏ ${prefix}delete
  - ❏ ${prefix}infochat
  - ❏ ${prefix}quoted
  - ❏ ${prefix}listpc
  - ❏ ${prefix}listgc
  - ❏ ${prefix}listonline
  `
}

exports.databasemenu = (prefix) => {
	return`
  *DATABASE MENU*
  - ❏ ${prefix}setcmd
  - ❏ ${prefix}listcmd
  - ❏ ${prefix}delcmd
  - ❏ ${prefix}lockcmd
  - ❏ ${prefix}addmsg
  - ❏ ${prefix}listmsg
  - ❏ ${prefix}getmsg
  - ❏ ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
  *ANONYMOUS CHAT*
  - ❏ ${prefix}anonymous
  - ❏ ${prefix}start
  - ❏ ${prefix}next
  - ❏ ${prefix}keluar
  - ❏ ${prefix}sendkontak
  `
}

exports.islamicmenu = (prefix) => {
	return`
  *ISLAMIC MENU*
  - ❏ ${prefix}iqra
  - ❏ ${prefix}hadist
  - ❏ ${prefix}alquran
  - ❏ ${prefix}juzamma
  - ❏ ${prefix}tafsirsurah
  `
}

exports.ownermenu = (prefix) => {
	return`
  *OWNER MENU*
  - ❏ ${prefix}react
  - ❏ ${prefix}chat
  - ❏ ${prefix}join
  - ❏ ${prefix}leave
  - ❏ ${prefix}block @user
  - ❏ ${prefix}unblock @user
  - ❏ ${prefix}bcgroup 
  - ❏ ${prefix}bcall 
  - ❏ ${prefix}setppbot
  - ❏ ${prefix}setexif
  - ❏ ${prefix}setmenu 
  - ❏ ${prefix}setallmenu 
  `
}

//tqto gsh di hps y :) kalau mai tmbhin aja nama kalian!
exports.thanksto = () => {
	return`
  *THANKS TO*
  ♚ MARGARETA 
  ☻ ALL-MEMBERs
`
}