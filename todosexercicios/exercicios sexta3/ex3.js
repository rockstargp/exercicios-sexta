document.getElementById('saldoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const saldo = parseFloat(document.getElementById('saldo').value);
    const saldoReajustado = saldo * 1.01;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `O saldo reajustado é R$ ${saldoReajustado.toFixed(2)}.`;
});
