$(document).ready(function () {

    let queryURL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a1967871154f5a6506ff8d6e6d848946&format=json";

    fetch(queryURL)
        .then(data => data.json())
        .then(json => {
            console.log(json);





            for (var i = 0; i < 10; i++) {

                console.log(json.tracks.track[i].name)

                let ituneUrl = "https://itunes.apple.com/search?term=" + json.tracks.track[i].name + "&limit=10";
                var topTrackDiv = $("<div class=top-tracks>");
                fetch(ituneUrl)
                    .then(data => data.json())
                    .then(json2 => {
                        console.log(json2);
                        //gets img of tracks from last fm API
                        var trackImg =  json2.results[0].artworkUrl100;

                        //creates div to store track pictures
                        

                        var img = $("<img>").attr("src", trackImg);
                        console.log(img)
                        topTrackDiv.append(img,);


                        //prepend to top-tracks
                        $(".top-tracks").prepend(topTrackDiv);
                    })

            }

        })
        .catch(error => console.log(error))

});