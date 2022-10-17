let $ = document.querySelector.bind(document);

let inputLogin = $('#login');
let inputSenha = $('#senha');

let botao = $('#botao-login');

let iconeUser = $('.icone-user');
let iconeSenha = $('.icone-senha');

let mensagemErro = $('.login-erro');




botao.addEventListener('click', function(event) {
    event.preventDefault();
    if(inputLogin.value == 'admin' && inputSenha.value == 'admin') {
        inputLogin.classList.remove('formulario-input__erro');
        inputSenha.classList.remove('formulario-input__erro');
        mensagemErro.classList.add('login-esconde');
        botao.classList.remove('login-formulario-botao-erro');
        window.location.href = "home.html"
    } else {
        mensagemDeErro();
    }
});