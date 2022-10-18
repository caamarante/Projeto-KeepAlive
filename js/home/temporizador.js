let contador = 600;

const temporizador = setInterval(() => {
    if (contador != 0) {
        contador--; 
    }
    
    document.getElementById("contador").innerHTML = contador;
    if (contador == 0) {
        mostrarModal();
        contador = 0;
    }
},1000);