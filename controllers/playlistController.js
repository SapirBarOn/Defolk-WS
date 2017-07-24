const 
    mongoose = require('mongoose'),
    consts = require('../consts/constring'),
    Song = require('../models/Song'),
    Album = require('../models/Album'),
    options = {
        server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
    };

//mongoose.connect(consts.MLAB_KEY,options);


//router.get('/playlist', function(req, res, next){
exports.getAllSongs = (req,res)=>{
    Song.find({}, function(err,songs){
        if(err){
            console.log(`Problem :: err -> ${err}`);
            return res.status(404).send(err);
        }
        console.log(songs);
        return res.status(200).send(songs);
    });
};

exports.getAllAlbums = (req,res)=>{
    Album.find({}, function(err,songs){
        if(err){
            console.log(`Problem :: err -> ${err}`);
            return res.status(404).send(err);
        }
        console.log(songs);
        return res.status(200).send(albums);
    });
};
