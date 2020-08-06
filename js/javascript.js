let button = document.querySelector("#search-btn");
let userInput = document.querySelector("#user-input");
let output = document.querySelector("#top100");

button.addEventListener('click', (e) => {
    getDataFromItunes();
});

function getDataFromItunes() {
    let url = "https://itunes.apple.com/search?term=" + userInput.value
    
    fetch(url)
    .then(data => data.json() )
    .then( json => {
        console.log(json);

        
    })
    .catch(error => console.log(error) )
}


