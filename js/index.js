$(document).ready(function () {

    let queryURL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a1967871154f5a6506ff8d6e6d848946&format=json";

    fetch(queryURL)
        .then(data => data.json())
        .then(json => {
            // console.log(json);

            //hold songs
            var songNames= [];
            for(var i =0; i < 12; i++) {
                var trackName = json.tracks.track[i].name;
                songNames.push(trackName);
            }
            console.log(songNames);


            for (var i = 0; i < 5; i++) {  
                // console.log(songName);

                let ituneUrl = "https://itunes.apple.com/search?term=" + songNames[i] + "&limit=1";
                fetch(ituneUrl)
                    .then(data => data.json())
                    .then(json2 => {
                        console.log(json2);

                        var topTrackDiv = $("<div class = 'track-display col-sm-12'>");

                        //gets img of tracks from last fm API
                        var trackImg =  json2.results[0].artworkUrl100;

                        //creates div to store track pictures
                        var img = $("<img>").addClass("track-img").attr("src", trackImg);
                        // console.log(img)
                        topTrackDiv.append(img);

                        ///==================================
                        var names = json2.results[0].trackName;
                        var nameDisplay = $("<p>").addClass("track-name").text(names);
                        topTrackDiv.append(nameDisplay);
                        //===================================

                        //prepend to top-tracks
                        $(".top-tracks").prepend(topTrackDiv);

                    })

            }

        })
        .catch(error => console.log(error))



});