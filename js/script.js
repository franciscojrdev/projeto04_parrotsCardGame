
const cartas = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

let quantCartas = parseInt(prompt("Informe a quantidade de cartas"));

while (quantCartas % 2 !== 0){
    quantCartas = parseInt(prompt("Informe a quantidade de cartas"));
}
function criarCartas() {
    for (let i = 0; i < quantCartas; i++) {
        const template = ` 
            <div class="card" onclick="turnCard(this)">
                <div class="front-face face">
                    <img src="img/${cartas[i]}" alt="Card Front">
                </div>
                <div class="back-face face">
                    <img src="img/front.png" alt="Card Back">
                </div>
            </div>`
            document.querySelector("section").innerHTML += template;
    }
}

criarCartas();

function turnCard(elemento) {
    let card = document.querySelectorAll(".card .back-face");
    if (card !== null) {
        card.classList.add("turn");
    }
    elemento.classList.remove("turn");
}