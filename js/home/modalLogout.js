let modalLogout = document.getElementById("modalLogout");
let botaoLogout = document.getElementById("logout");
let span = document.getElementsByClassName("close")[0];

botaoLogout.addEventListener('click', function(){
    console.log('clicado')
    modalLogout.style.display = "block";
})

let salvarLogin = document.getElementById("salvarLogin");
let apagarLogin = document.getElementById("botaoLogout");


salvarLogin.addEventListener('click', function(){
    window.location.href = "login.html";
});

apagarLogin.addEventListener('click', function(){
    localStorage.clear();
    window.location.href = "login.html";
});

span.onclick = function() {
    modalLogout.style.display = "none";
}