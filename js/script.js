
let cartasJogo = [];
let back, front;

const cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]


function quantCards(){}
let quantCartas = parseInt(prompt("Informe a quantidade de cartas [Entre 4 e 14 cartas]"));

while (quantCartas % 2 !== 0 || quantCartas < 4 || quantCartas > 14) {
    quantCartas = parseInt(prompt("Informe a quantidade de cartas [Entre 4 e 14 cartas]"));
}
function criarCartas() {
    cartasJogo = cartas.slice(0, quantCartas / 2);
    for (let i = 0; cartasJogo.length < quantCartas; i++) {
        cartasJogo.push(cartas[i]);
    }
    cartasJogo.sort(function comparador() {
        return Math.random() - 0.5;
    });

    for (let i = 0; i < quantCartas; i++) {
        const template = ` 
            <li class="card" onclick="turnCard(this)">
                <div class="back-face face" >
                    <img src="./img/${cartasJogo[i]}" alt="Card Front">
                </div>
                <div class="front-face face">
                    <img src="./img/front.png" alt="Card Back">
                </div>
            </li>`
        document.querySelector("ul").innerHTML += template;
    }
}

criarCartas();
function turnCard(elemento) {
    let selecionado = document.querySelectorAll(".card.selecionado");
    


    if (selecionado[0] === undefined) {
        back = elemento.querySelector(".back-face");
        front = elemento.querySelector(".front-face");
        back.classList.add("back-face-flip");
        front.classList.add("front-face-flip");
        selecionado.classList.add("selecionado");
    }
}
