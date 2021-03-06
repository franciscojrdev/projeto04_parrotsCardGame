
let cartasJogo = [];
let firstCard, secondCard, quantCartas;
let numJogadas = 0;
let pares = 0;

const cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]


function quantidadeCartas() {
    quantCartas = parseInt(prompt("Informe a quantidade de cartas [Entre 4 e 14 cartas]"));

    while (quantCartas % 2 !== 0 || quantCartas < 4 || quantCartas > 14) {
        quantCartas = parseInt(prompt("Informe a quantidade de cartas [Entre 4 e 14 cartas]"));
    }
}
function criarCartas() {
    cartasJogo = cartas.slice(0, quantCartas / 2);
    for (let i = 0; cartasJogo.length < quantCartas; i++) {
        cartasJogo.push(cartas[i]);
    }
    cartasJogo.sort(comparador);

    for (let i = 0; i < quantCartas; i++) {
        const template = ` 
            <li class="card" onclick="turnCard(this)">
                <div class="front-face face">
                    <img src="./img/front.png" alt="Card front">
                </div>
                <div class="back-face face" >
                    <img src="./img/${cartasJogo[i]}" alt="Card back">
                </div>
            </li>`
        document.querySelector("ul").innerHTML += template;
    }
}
function comparador() {
    return Math.random() - 0.5;
}

quantidadeCartas();
criarCartas();

function turnCard(elemento) {
    numJogadas++;
    elemento.classList.add("click");
    if (firstCard === undefined) {
        firstCard = elemento;
    } else {
        secondCard = elemento;

        if (firstCard.innerHTML === secondCard.innerHTML) {
            pares = pares + 2;
            endGame();
            reset();
        }
        else {
            setTimeout(function turnCards() {
                firstCard.classList.remove("click");
                secondCard.classList.remove("click");
                reset();
            }, 1000);
        }
    }

}

function reset() {
    firstCard = undefined;
    secondCard = undefined;
}
function endGame() {
    if (pares === quantCartas) {
        setTimeout(notificar, 1000);
    }
}
function notificar() {
    alert(`Voc?? venceu em ${numJogadas} Jogadas`);
}
