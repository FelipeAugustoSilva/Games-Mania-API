$(document).ready(function){

}


//function mostrarPopup(){
//    window.alert("Seja bem vindo a Games Mania, a melhor loja gamer do Brasil")
//}

let email = document.getElementById("formulario");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)

}

let menu =  document.getElementById("menu");

function mostrarMenu(){
    if(menu.style.display != "flex"){
    menu.style.display = "flex"
    }else{
    menu.style.display = "none"
    }
}



// let anunciosOfertas = [
//     {
//         imagem:,
//         descricao:,
//         valorbruto:,
//         valordesconto:
//     },
//     {
//         imagem:,
//         descricao:,
//         valorbruto:,
//         valordesconto:
//     },
//     {
//         imagem:,
//         descricao:,
//         valorbruto:,
//         valordesconto:
//     },
//     {
//         imagem:
//         descricao:,
//         valorbruto:,
//         valordesconto:
//     },
//     {
//         imagem:,
//         descricao:,
//         valorbruto:,
//         valordesconto:
//     },
    
// ]

// function redenrizarAnuncios(){
//     let espaco = document.getElementById("espaco-ofertas")

//     let template = "";

//     for (let index = 0; index < anunciosOfertas.length; index++) {
//         const ofertas = anunciosOfertas[index];

//         template += `<div class="cards-ofertas">
//         <a href=""><img src="img/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_m 1.svg" alt="ofertas"></a>
//         <p>${ofertas.descricao}</p>
//         <h6>${ofertas.valorbruto}</h6>
//         <h5>${ofertas.valordesconto}</h5>
//     </div>`
//     }
 
//     espaco.innerHTML = template;
// }


