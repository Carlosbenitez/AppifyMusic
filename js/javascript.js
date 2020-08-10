let button = document.querySelector("#search-btn");
let userInput = document.querySelector("#user-input");
let output = document.querySelector("#top100");

button.addEventListener('click', (e) => {
    getDataFromItunes();
});

function getDataFromItunes() {
    let url = "https://itunes.apple.com/search?term=" + userInput.value + "&limit=25"
    
    fetch(url)
    .then(data => data.json() )
    .then( json => {
        console.log(json);

        let songDiv = $("<div class='song'>");
        
        //goes through and displays all the tracks in songs array
        for(var i = 0; i < json.length; i++) {
            //var track name
            var trackName = json.trackCensoredName;
            var trackDisplay = $("<h3>").text(trackName);

            songDiv.append(trackDisplay);

            $(".artist-display").prepend(songDiv);
        }
        
    })
    .catch(error => console.log(error) )
}





