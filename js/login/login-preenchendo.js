inputLogin.addEventListener("input", function(){
    if (this.value.length > 0) {
        inputLogin.classList.add('input__login-digitando');
        iconeUser.classList.remove('icone-user');

    } else {
        inputLogin.classList.remove('input__login-digitando');
        iconeUser.classList.add('icone-user');
    }
});

inputSenha.addEventListener("input", function(){
    if (this.value.length > 0) {
        inputSenha.classList.add('input__senha-digitando');
        iconeSenha.classList.remove('icone-senha');

    } else {
        inputSenha.classList.remove('input__senha-digitando');
        iconeSenha.classList.add('icone-senha');
    }
});