//Owen Louden, Intro Media Apps, 3/24/22


//form to allow to log in
let loginForm = document.getElementById("login-form");

//recognize login button being clicked, send to submit
let loginButton = document.getElementById("login-form-submit");

//recognize error, direct to error message
let loginErrorMsg = document.getElementById("login-error-msg");


//allow login button to listen for a click, then 
loginButton.addEventListener("click", (e) => {
    //let username be inserted for this value
    let username = loginForm.username.value;
    //let password be inserted for this value
    let password = loginForm.password.value;


    //if the username "Username" and password "Password" are the same,
    if (username == "Username" && password == "Password") {

        //then it's a success! (alert reader)
        alert("Success!"); }

        //otherwise, it's a failure
        else { alert("Wrong Information")

    }
})
