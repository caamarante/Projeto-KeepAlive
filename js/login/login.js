let $ = document.querySelector.bind(document);

let inputLogin = $('#login');
let inputSenha = $('#senha');

let botao = $('#botao-login');

let iconeUser = $('.icone-user');
let iconeSenha = $('.icone-senha');

let mensagemErro = $('.login-erro');

let verificarLogado = localStorage.getItem('logado');

if(verificarLogado == 'logado'){
    inputLogin.value = 'admin'
    inputSenha.value = 'admin'
}

botao.addEventListener('click', function(event) {
    event.preventDefault();
    if(inputLogin.value == 'admin' && inputSenha.value == 'admin') {
        limparErro();
        continuarLogado();
        myWindow = window.open("home.html", "_self");
    } else {
        mensagemDeErro();
    }
});