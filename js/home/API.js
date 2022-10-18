const api = {
    key: "6abee6813b834956b51163100221710",
    base: "http://api.weatherapi.com/v1/",
}

let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
let siglaEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

window.addEventListener('load', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
        alert('navegador não suporta geolocalização');
    }
    function setPosition(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        coordResults(lat, long);
    }
    function showError(error) {
        alert(`erro: ${error.message}`);
    }
});

function coordResults(lat, long) {
    fetch(`${api.base}current.json?key=${api.key}&q=${lat},${long}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            mostrarTemperaturaTempo(response);
        });
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`)
        .then(resposta => {
            return resposta.json();
        })
        .then(resposta => {
            mostrarCidadeEstado(resposta);
        }); 
}

function mostrarCidadeEstado(resposta) {
    let cidade = document.querySelector('.header__tempo-localizacao');
    let estado = resposta.address.state;
    let indice = procuraSiglaEstado(estado);
    cidade.innerHTML = (resposta.address.city + ' - ' + siglaEstados[indice]);
}

function mostrarTemperaturaTempo(response) {
    let temperatura = document.querySelector('.header__tempo-temperatura');
    let clima = document.querySelector('.header__tempo-previsao');
    temperatura.innerHTML = (response.current.temp_c + 'º');
    clima.setAttribute ('src', 'http:'+ response.current.condition.icon);
}

function procuraSiglaEstado(estado) {
    let indice;
    for(i=0; i < estados.length; i++){
        if (estado == estados[i]){
            indice = i;
            break;
        }
    }
    return indice;
}