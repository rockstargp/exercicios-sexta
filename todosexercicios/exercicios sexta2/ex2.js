document.getElementById('precoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorQuilo = parseFloat(document.getElementById('valorQuilo').value);
    const quantidadeQuilos = parseFloat(document.getElementById('quantidadeQuilos').value);
    const valorFinal = valorQuilo * quantidadeQuilos;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `O valor final a ser pago é R$ ${valorFinal.toFixed(2)}.`;
});
