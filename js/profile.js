$(".sign-btn").on('click', function() {
    //grabs value in username
    let username = $("#username").val();
    console.log(username);

    //grabs password
    let password = $("#password").val();
    console.log(password);

    //saves username and password in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
});








