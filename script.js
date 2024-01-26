let username = document.getElementById('UserName');
let passward = document.getElementById('Password');
let login = document.getElementById('login');
let modal = document.getElementById('simpleModal')


login.addEventListener("click", (e) => {
    e.preventDefault();
    let value1 = username.value;
    let value2 = passward.value;
    if (value1.length < 4 || value2.length < 5 || value1.length == 0 || value2.length == 0) {
        username.value = "";
        passward.value = "";
        modal.style.display = 'block'
    }
    else {
        location.href = "./dash.html";
    }
})