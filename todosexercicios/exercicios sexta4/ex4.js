document.getElementById('mediaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);

    const mediaAritmetica = (numero1 + numero2 + numero3) / 3;
    const mediaPonderada = ((numero1 * 3) + (numero2 * 2) + (numero3 * 5)) / 10;
    const somaDasMedias = mediaAritmetica + mediaPonderada;
    const mediaDasMedias = somaDasMedias / 2;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Média Aritmética: R$ ${mediaAritmetica.toFixed(2)}</p>
        <p>Média Ponderada: R$ ${mediaPonderada.toFixed(2)}</p>
        <p>Soma das Médias: R$ ${somaDasMedias.toFixed(2)}</p>
        <p>Média das Médias: R$ ${mediaDasMedias.toFixed(2)}</p>
    `;
});
