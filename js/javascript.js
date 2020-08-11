$(document).ready(function() {
    let button = document.querySelector("#search-btn");
    let userInput = document.querySelector("#user-input");
    let output = document.querySelector("#top100");

    button.addEventListener('click', (e) => {
        getDataFromItunes();
    });

    function getDataFromItunes() {
        let queryURL = "https://itunes.apple.com/search?term=" + userInput.value + "&limit=25"
        
        fetch(queryURL)
        .then(data => data.json() )
        .then( json => {
            console.log(json);

            
            for(var i = 0; i <= 25; i++) {

                //gets song name form api
                var songName = json.results[i].trackCensoredName;
                //gets song picture from api
                var songImg = json.results[i].artworkUrl30;
                //gets preview audio
                var songAudio = json.results[i].previewUrl;

                var songDiv = $("<div class='songs col-sm-12'>");

                //track image
                var img = $("<img>").addClass('song-img').attr("src", songImg);
                songDiv.append(img);

                //track name
                var track = $("<p>").addClass("track-name").text(songName);
                songDiv.append(track);

                //preview button
                var previewButton = $( '<button />' , { 'class': 'play-btn btn btn-default', type: 'button', id: 'test1',
                html: '<span class="glyphicon glyphicon-arrow-left"></span>' })

                var pauseButton = $( '<button />' , { 'class': 'pause-btn btn btn-default', type: 'button', id: 'test1',
                html: '<span class="glyphicon glyphicon-arrow-left"></span>' })


                $(previewButton).on("click", function() {
                    console.log("Hello");
                    songAudio.play();

                    

                });

                songDiv.append(previewButton);
                songDiv.append(pauseButton);

                $(".artist-display").prepend(songDiv);
            }

        })
        .catch(error => console.log(error) )

    }

})






