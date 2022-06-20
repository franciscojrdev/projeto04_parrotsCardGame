
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
    cartasJogo.sort(function comparador() {
        return Math.random() - 0.5;
    });

    for (let i = 0; i < quantCartas; i++) {
        const template = ` 
            <li class="card" onclick="turnCard(this)">
                <div class="front-face face">
                    <img src="./img/front.png" alt="Card Back">
                </div>
                <div class="back-face face" >
                    <img src="./img/${cartasJogo[i]}" alt="Card Front">
                </div>
            </li>`
        document.querySelector("ul").innerHTML += template;
    }
}
quantidadeCartas();
criarCartas();
function turnCard(elemento) {
    // let selecionado = document.querySelectorAll(".card.selecionado");
    if (elemento.classlist.contains("turn") || secondCard !== undefined) {
        return;
    }
    numJogadas++;
    elemento.classlist.add("turn");
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
                firstCard.classlist.remove("turn");
                secondCard.classlist.remove("turn");
                reset();
            }, 1000)
        }
    }

}
function reset() {
    firstCard = undefined;
    secondCard = undefined;
}
function endGame() {
    if (pares === quantCartas) {
        setTimeout(
            alert(`Você venceu em ${numJogadas}`)
            , 1000);
    }
}

// if (selecionado[0] === undefined) {
//     back = elemento.querySelector(".back-face");
//     front = elemento.querySelector(".front-face");
//     back.classList.add("back-face-flip");
//     front.classList.add("front-face-flip");
//     selecionado.classList.add("selecionado");
// }