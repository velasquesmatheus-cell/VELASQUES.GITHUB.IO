let contador = 0;

function atualizarTela() {
    document.getElementById("contador").innerText = contador;
}

function aumentar() {
    contador++;
    atualizarTela();
}

function diminuir() {
    contador--;
    atualizarTela();
}

function resetar() {
    contador = 0;
    atualizarTela();
}
