var fs = require('fs');
var async = require('async');

var artistIds = [1,2,3];

var addArtist = function(artist, callback){
    var artistId;
    setTimeout(function(){
        console.log('added %s', artist.name);
        artistId = artistIds.pop();
    }, 500);
    
    async.series(artist.songs.map(function(song){
        return function(cb){addSong(song, artistId, cb)}
    }))
    
    callback(null);
}

var addSong = function(name,artistId, callback){
    setTimeout(function(){
        console.log('added %s', name);
        callback(null);
    }, 500);
}

var artists = JSON.parse(fs.readFileSync('./songbook.json','utf-8'));

async.series(artists.map(function(artist){
    return function(cb){addArtist(artist,cb)}
})
);
