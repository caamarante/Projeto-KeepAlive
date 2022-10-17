

let nomeMeses = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro" , "novembro", "dezembro");

let nomeDias = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");

const colocarZero = n => {
    return ('0' + n).slice(-2);
}

const now = new Date;

const hora = colocarZero(now.getHours()) + ':' + colocarZero(now.getMinutes());

const data = nomeDias[now.getDay() ] + ', ' + colocarZero(now.getDate ()) + " de " + nomeMeses [now.getMonth() ] +  " de " + now.getFullYear ();

document.getElementById("hora").innerHTML = hora;
document.getElementById("data").innerHTML = data;

const horaDataReal = setInterval(() => {
    const now = new Date;

    const hora = colocarZero(now.getHours()) + ':' + colocarZero(now.getMinutes());

    const data = nomeDias[now.getDay() ] + ', ' + colocarZero(now.getDate ()) + " de " + nomeMeses [now.getMonth() ] +  " de " + now.getFullYear ();
    
    document.getElementById("hora").innerHTML = hora;
    document.getElementById("data").innerHTML = data;
},1000);
