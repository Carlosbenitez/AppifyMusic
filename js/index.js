$(document).ready(function() {

    let queryURL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a1967871154f5a6506ff8d6e6d848946&format=json";

    fetch(queryURL)
    .then(data => data.json())
    .then(json => {
        console.log(json);

        //array that holds the top tracks taken from last fm API
        var trackNames = [];
        for(var i = 0; i < 10; i++) {

            //gets name of tracks from last fm API
            var songName = json.tracks.track[i].name;
            trackNames.push(songName);
        }
        console.log("top tracks:" + trackNames);

        //This takes each name of songs from trackNames[]
        //and gets the song info from Itunes API
        //then displays each song into their own array with a length of 1
        for(var i = 0; i < trackNames.length; i++) {
            let iTunesURL = "https://itunes.apple.com/search?term=" + trackNames[i] + "&limit=1";

            fetch(iTunesURL)
            .then(data => data.json())
            .then(json2 => {
                console.log(json2);
            });
        }
    })
    .catch(error => console.log(error) )



});