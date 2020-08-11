$(document).ready(function() {

    let queryURL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a1967871154f5a6506ff8d6e6d848946&format=json";

    fetch(queryURL)
    .then(data => data.json())
    .then(json => {
        console.log(json);

        for(var i = 0; i < 10; i++) {
            //gets img of tracks from last fm API
            var trackImg = json.tracks.track[i].image[1];

            //creates div to store track pictures
            var topTrackDiv = $("<div class='carousel-item active'>");

            var img = $("<img>").addClass("song-img").attr("src", trackImg);
            topTrackDiv.append(img);


            //prepend to top-tracks
            $(".top-tracks").prepend(topTrackDiv);
        }

    })
    .catch(error => console.log(error) )

});