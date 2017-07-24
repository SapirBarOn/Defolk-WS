const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      autoIncrement = require('../database'),

    AlbumSchema = new schema({
        albumImg : {type:String, index:1, required:true, unique:true},
        albumName : String,
        djName : String,
        djImg : String,
        followers : Number
    },{collection:'albums'}),

    AlbumSchema = mongoose.model('AlbumSchema',albumSchema);

    module.exports = AlbumSchema;
