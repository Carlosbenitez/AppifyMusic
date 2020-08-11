$(document).ready(function() {
    let button = document.querySelector("#search-btn");
    let userInput = document.querySelector("#user-input");

    button.addEventListener('click', (e) => {
        getDataFromItunes();
    });

    //------------------Itunes API---------------------//
    function getDataFromItunes() {
        let queryURL = "https://itunes.apple.com/search?term=" + userInput.value + "&limit=25"
        
        fetch(queryURL)
        .then(data => data.json() )
        .then( json => {
            console.log(json);

            $(".artist-display").empty();

            //gets artist name
            var singerName = json.results[0].artistName;
            console.log(singerName);
            $("#artist-name").html(singerName);

          
            for(var i = 0; i <= 25; i++) {

                //gets song name form api
                var songName = json.results[i].trackCensoredName;
                //gets song picture from api
                var songImg = json.results[i].artworkUrl30;
                //gets preview audio
                var songLink = json.results[i].previewUrl;

                var songDiv = $("<div class='songs col-sm-12'>");

                //track image
                var img = $("<img>").addClass('song-img').attr("src", songImg);
                songDiv.append(img);

                //track name
                var track = $("<p>").addClass("track-name").text(songName);
                songDiv.append(track);

                //preview button
                var previewButton = $('<button class="play-btn" target="_blank"><i class="fas fa-play"></i>');


                $(previewButton).on("click", function() {
                    console.log("Hello");
                    window.location.href= songLink;

                });

                songDiv.append(previewButton);

                //display all content in here
                $(".artist-display").prepend(songDiv);
            }

        })
        .catch(error => console.log(error) )

        //clears user atrist input after search
        $("#user-input").val("");
    }



})




