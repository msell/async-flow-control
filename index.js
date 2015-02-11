var fs = require('fs');
var async = require('async');

var addArtist = function(artist, callback){
    setTimeout(function(){
        console.log('added %s', artist.name);
        callback(null);
    }, 500);
}

var addSong = function(name,artistId, callback){
    setTimeout(function(){
        console.log('added %s', name);
        callback(null);
    }, 500);
}

var artists = JSON.parse(fs.readFileSync('./songbook.json','utf-8'));


async.waterfall([
    function(cb){addArtist(artists[0],cb)},
    function(cb){addArtist(artists[1],cb)},
    function(cb){addArtist(artists[2],cb)}
]
);
