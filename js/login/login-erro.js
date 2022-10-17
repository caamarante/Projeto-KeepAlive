function mensagemDeErro() {
    inputLogin.classList.add('formulario-input__erro');
    inputSenha.classList.add('formulario-input__erro');
    mensagemErro.classList.remove('login-esconde');
    botao.classList.add('login-formulario-botao-erro');
}