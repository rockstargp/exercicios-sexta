document.getElementById('maiorValorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    const maiorValor = valor1 > valor2 ? valor1 : valor2;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `O maior valor é R$ ${maiorValor.toFixed(2)}.`;
});
