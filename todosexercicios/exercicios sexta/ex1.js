document.getElementById('trocoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorPago = parseFloat(document.getElementById('valorPago').value);
    const precoProduto = parseFloat(document.getElementById('precoProduto').value);
    const troco = valorPago - precoProduto;

    const resultadoDiv = document.getElementById('resultado');

    if (troco < 0) {
        resultadoDiv.textContent = 'O valor pago é insuficiente.';
        resultadoDiv.style.color = 'red';
    } else {
        resultadoDiv.textContent = `O troco a ser dado é R$ ${troco.toFixed(2)}.`;
        resultadoDiv.style.color = 'green';
    }
});
