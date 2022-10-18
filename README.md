![Logo](https://github.com/caamarante/Projeto-KeepAlive/blob/master/imagem/readme/Logo.png)

# KeepAlive

O usuário quer logar no website de colaboradores da Compass para que consiga acessar com segurança e usufruir das funcionalidades disponíveis.

Objetivo do projeto: um login que possa permitir uma boa usabilidade ao usuário.

## Acessando

### Quando acessado será visto a página de login

![Login](https://github.com/caamarante/Projeto-KeepAlive/blob/master/imagem/readme/CapturaDeTelaLogin.png)

### Quando login está sendo preenchido

![LoginPreenchendo](https://github.com/caamarante/Projeto-KeepAlive/blob/master/imagem/readme/CapturaDeTelaLoginPreenchido.png)

### Quando login é preenchido incorretamente

![LoginErro](https://github.com/caamarante/Projeto-KeepAlive/blob/master/imagem/readme/CapturaDeTelaLoginErro.png)

### Quando login é preenchido corretamente o usuario é redirecionado para home

![Home](https://github.com/caamarante/Projeto-KeepAlive/blob/master/imagem/readme/CapturaDeTelaHome.png)

### Quando o temporizador da home chega em zero

![HomeTemporizador](https://github.com/caamarante/Projeto-KeepAlive/blob/master/imagem/readme/CapturaDeTelaHomeTemporizador.png)

### Quando o botao logout da home é clicado

![HomeLogout](https://github.com/caamarante/Projeto-KeepAlive/blob/master/imagem/readme/CapturaDeTelaHomeLogout.png)

### Quando o botao Continuar navegando da home é clicado

É aberta uma nova aba do site de noticias da UOL

## 🎨 Documentação de cores

| Cor               | Hexadecimal |
| ----------------- | ----------- |
| Cor branco        | #FFFFFF     |
| Cor vermelho      | #C12D18     |
| Cor verde         | #09AC5E     |
| Cor amarelo       | #E9B425     |
| Cor laranja       | #E29933     |
| Cor preto         | #000000     |
| Cor cinza         | #222222     |
| Cor cinza claro   | #E0E0E0     |

| Cores gradientes          | linear-gradient                                        |
| ---------------------     | ------------------------------------------------------ |
| Cor laranja gradiente     | linear-gradient(180deg, #E29933 0%, #C13216 100%)      |
| Cor preto gradiente       | linear-gradient(180deg, #222222 0%, #000000 100%)      |
| Cor amarelo gradiente     | linear-gradient(180deg, #E9B425 0%, #E29933 100%)      |
| Cor cinza gradiente       | linear-gradient(180deg, #33383D 0%, #1C1D20 100%)      |
| Cor vermelho gradiente    | linear-gradient(90deg, #FF2D04 0%, #C13216 100%)       |
| Cor cinza claro gradiente | linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%) |

## ℱ Documentação de fonte

O Google Fonts Knowledge permite que designers e desenvolvedores de todos os conjuntos de habilidades escolham e usem o tipo com propósito.

### Fonte utilizada

Poppins

#### Para usar na web

Para incorporar a fonte, copie o código no `<head>` do seu html

- `<link rel="preconnect" href="https://fonts.googleapis.com">`
- `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- `<link href="https: //fonts.googleapis.com/css2? family= Poppins:wght@400;700 & display=swap" rel="stylesheet">`

#### Regras CSS para especificar famílias

- font-family: 'Poppins', sans-serif;

## Documentação da API WeatherAPI

[Documentação WeatherAPI](https://www.weatherapi.com/docs/#intro-request)

WeatherAPI.com fornece acesso a dados meteorológicos e geográficos por meio de uma API tranquila JSON/XML. Ele permite que os desenvolvedores criem aplicativos de desktop, web e móveis usando esses dados com muita facilidade.

### Autenticação
O acesso da API aos dados é protegido por uma chave de API. 


A autenticação para a API WeatherAPI.com é fornecida passando sua chave de API como parâmetro de solicitação por meio de uma API .

### Solicitar
#### URL de solicitação
A solicitação para a API WeatherAPI.com consiste no URL base e no método da API. Você pode fazer solicitações HTTP ou HTTPS para nossa API.

URL base: `http://api.weatherapi.com/v1`

| API                 | Método API              |
| :------------------ | :---------------- |
| `Clima atual`           | `/current.json`          |      

### Parâmetros de solicitação

| Parâmetro   |              | Descrição     |
| ----------- | -------------| ----------------|
| `key`       | `Requeridos` | **Obrigatório**. A chave da sua API |
| `q`         | `Requeridos` | Parâmetro de consulta com base em quais dados são enviados de volta. O usado no projeto: Latitude e Longitude (grau decimal), por exemplo: q=48,8567,2,3508 |

### Objeto de localização
O objeto de localização é retornado com cada resposta da API. Na verdade, é o local correspondente para o qual as informações foram retornadas.

| Campo   | Tipo de dados  | Descrição                 |
| ------- | -------------  | ------------------------- |
| `lat`   | `decimal`      | Latitude em grau decimal  |
| `lon`   | `decimal`      | Longitude em grau decimal |

### API em tempo real
O método de API de clima atual ou clima em tempo real permite que um usuário atualize as informações meteorológicas atuais em json e xml. Os dados são retornados como um objeto atual.

| Campo            | Tipo de dados | Descrição                   |
| ---------------- | --------------| ----------------------------|
| `temp_c`         | `decimal`     | Temperatura em celsius      |
| `condition:icon` | `string`      | Ícone de condição climática |
 

## Documentação da API Reverse
[Documentação API Reverse](https://nominatim.org/release-docs/develop/api/Reverse/)

Reverse geocoding gera um endereço de latitude e longitude.

### Como funciona

A reverse geocoding API não calcula exatamente o endereço da coordenada que recebe. Ele funciona encontrando o objeto OSM adequado mais próximo e retornando suas informações de endereço.

### Parâmetros

O formato principal da API reversa é

`https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&<params>`

onde `lat`e `lon` são latitude e longitude de uma coordenada na projeção WGS84.


### Formato de saída

- format=jsonv2

`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=<value>&lon=<value>`

### Objeto de localização

O objeto de localização é retornado com cada resposta da API. Na verdade, é o local correspondente para o qual as informações foram retornadas.

| Campo   | Tipo de dados  | Descrição       |
| ------- | ---------------| ----------------|
| `city`  | `String`       | Nome da cidade  |
| `state` | `string`       | Nome do estado  |



## 📚 Referência

 - [readme.so/pt/editor](https://readme.so/pt/editor)
 - [WeatherAPI](https://www.weatherapi.com/docs/#intro-request)
 - [ReverseAPI](https://nominatim.org/release-docs/develop/api/Reverse/)
 - [Figma do Projeto](https://www.figma.com/file/D9NUCsGJ1gCvmL0ZUnb7SJ/keepalive?node-id=0%3A1)
 - [Data e Hora em Tempo Real com JavaScript](https://metring.com.br/data-e-hora-em-tempo-real-com-javascript#:~:text=Para%20mostrar%20data%20e%20hora,formatada%20na%20tela%20ou%20console)
 - [Redirecionando o usuário com window.location](https://www.devmedia.com.br/javascript-redirect-redirecionando-o-usuario-com-window-location/39809)
 - [Google Fonts](https://fonts.google.com/)

## 💻 Funcionalidades

- Hora e data em tempo real
- Clima, temperatura, cidade e estado em tempo real
- Botao logout
- Redirecionamento para página correta
- Cronômetro de 600 segundos
- Verificação de login

