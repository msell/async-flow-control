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

async.waterfall(artists.map(function(artist){
    return function(cb){addArtist(artist,cb)}
})
);
