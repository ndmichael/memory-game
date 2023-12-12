let regForm = document.getElementById("register");
let loginForm = document.getElementById("login");

console.log(loginForm)

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

function loginFunc(){
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let users = JSON.parse(localStorage.getItem('users'));

    let result = users.filter(user =>{
        return user.username === username && user.password == password;

    })

    if(result){
        alert("Youare now log in");
        window.location.href = "../index.html";
    }
    else{
        alert("You are not logged In");
    }
    


}