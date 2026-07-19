const mongoose = require('mongoose')


const Scheema = new mongoose.Schema({
     title:String,
     artist:String,
     audio:String,
     mood:String
})

const song = mongoose.model('song',Scheema)
module.exports = song