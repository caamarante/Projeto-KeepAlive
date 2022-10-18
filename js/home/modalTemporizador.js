const modalTemporizador = document.getElementById("modalTemporizador");

let botaoSair = document.getElementById("desconectar");
let botaoLogado = document.getElementById("continuarLogado");

botaoSair.addEventListener('click', function(){
    localStorage.clear();
    window.location.href = "login.html"
});

continuarLogado.addEventListener('click', function(){
    continuarLogado();
    window.location.href = "home.html"
});

function mostrarModal() {
  modalTemporizador.style.display = "block";
}

