document.getElementById('verificarImparForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');

    if (numero % 2 !== 0) {
        resultadoDiv.textContent = `O número ${numero} é ímpar.`;
        resultadoDiv.className = 'impar';
    } else {
        resultadoDiv.textContent = `O número ${numero} não é ímpar.`;
        resultadoDiv.className = 'nao-impar';
    }
});
