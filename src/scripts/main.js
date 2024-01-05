document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroRandom = Math.random() * numeroMax;
        numeroRandom = Math.floor(numeroRandom + 1);

        document.getElementById('result-value').innerText = numeroRandom;
        document.querySelector('.result').style.display = block;
    })
})