const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      autoIncrement = require('../database'),

    songSchema = new schema({
        songName : {type:String, index:1, required:true, unique:true},
        singerName : String,
        name : String,
        time : String,
        likes : Number,
        songImg : String
    },{collection:'songs'}),

    SongSchema = mongoose.model('SongSchema',songSchema);

    module.exports = SongSchema;
