function mensagemDeErro() {
    inputLogin.classList.add('formulario-input__erro');
    inputSenha.classList.add('formulario-input__erro');
    mensagemErro.classList.remove('login-esconde');
    botao.classList.add('login-formulario-botao-erro');
}

function limparErro() {
    inputLogin.classList.remove('formulario-input__erro');
    inputSenha.classList.remove('formulario-input__erro');
    mensagemErro.classList.add('login-esconde');
    botao.classList.remove('login-formulario-botao-erro');
}