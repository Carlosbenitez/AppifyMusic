
//When user registers for Appify
$("#register-btn").on('click', function() {
    //grabs value in userInput-id
    let username = $(this).siblings("#userInput-id").val();
    console.log(username);

    let email = $(this).siblings("#userInput-email").val();
    console.log(email);

    let password = $(this).siblings("#userInput-password").val();
    console.log(password);

    //saves username, email and password in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
});

let localUsername = localStorage.getItem("username");
let localPassword = localStorage.getItem("password");

//When user logs back in to Appify
$("#login-btn").on('click', function() {
    //gets login user id
    let userLogin = $(this).siblings("#user-id").val();

    //gets user login password
    let userPassword = $(this).siblings("#user-pass").val();

    
    profileCheck(userLogin, userPassword);

});

//checks if user inputs are correct
function profileCheck(user, pass) {
        //if both password and username ar wrong
        if(user != localStorage.getItem("username") && pass != localStorage.getItem("password")) {
            alert("Username and Password are wrong!!");
        }
        //if password is wrong
        else if(user === localStorage.getItem("username") && pass != localStorage.getItem("password")) {
            alert("Re-Enter password!!");
        }
        //if username is wrong
        else if(user != localStorage.getItem("username") && pass === localStorage.getItem("password")) {
            alert("Re-Enter Username!!");
        }
        else {
            window.open("index.html");

            //does not work but will test it out in the future
            $("#profile").text(localStorage.getItem("username"));
        }
}




//shouldn't store username/password (is a vunlerability)