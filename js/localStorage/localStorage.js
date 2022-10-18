let logado = 'naoLogado';

function continuarLogado() {
    logado = 'logado'
    localStorage.setItem('logado', logado);
}

