let regForm = document.getElementById("register");
let loginForm = document.getElementById("login");


function submitForm(e){
    e.preventDefault();
}

// prevent regForm from returning null when page location changes

if(regForm)
    regForm.addEventListener('submit', submitForm);

if (regForm !== null || loginForm !== null){
    loginForm.addEventListener('submit', submitForm);
}
    


function registration(e){
    let fullname = document.querySelector('#fullname').value;
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    let user = {fullname: fullname, username: username, password: password};
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(users)
    users.push(user)

    if(user){
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "../pages/login.html"
    }

}

/*
    ** logic for login
    ** loop through users in localStorage
    ** filter and return if login username and password matched
*/
function loginFunc(){
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let users = JSON.parse(localStorage.getItem('users'));

    let result = users.filter(user =>{

        return user.username === username && user.password == password;

    })
    console.log(result)
    if(result){
        // get the data and store in loggedIn in localStorage
        const data = {fullname:result[0].fullname, username: result[0].username, status: true}
        localStorage.setItem('loggedIn', JSON.stringify(data))
        alert("Youare now log in");
        window.location.href = "../index.html";
    }
    else{
        alert("You are not logged In");
    }
}

/*
    ** function to display userlogged in 
    ** linked to the URL using javascript
*/
function logOut(){
    const user = JSON.parse(localStorage.getItem('loggedIn'));
    if(user){
        alert("You will be logged out");
        localStorage.removeItem("loggedIn");
        window.location.href = "./pages/login.html";
    }
}

/*
    ** function to display userlogged in 
    ** linked to the URL using javascript
*/
function LoggedInUser(){
    const link = document.getElementById('loggedInAs');
    const user = JSON.parse(localStorage.getItem('loggedIn'));

    if(user){
        link.innerHTML = `loggedIn as: ${user.username}`;
    }
}
// function call
LoggedInUser();