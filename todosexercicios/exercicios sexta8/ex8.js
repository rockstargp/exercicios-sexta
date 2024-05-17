document.getElementById('produtoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const resultadoDiv = document.getElementById('resultado');

    if (codigo === '001') {
        resultadoDiv.textContent = 'O produto com o código 001 é: parafuso';
    } else if (codigo === '002') {
        resultadoDiv.textContent = 'O produto com o código 002 é: porca';
    } else if (codigo === '003') {
        resultadoDiv.textContent = 'O produto com o código 003 é: prego';
    } else if (codigo === '004') {
        resultadoDiv.textContent = 'O produto com o código 004 é: presunto';
    } else if (codigo ==='005') {
        resultadoDiv.textContent = 'O produto com o código 005 é: mortadela';
    } else {
        resultadoDiv.textContent = 'O produto com o código ' + codigo + ' é: diversos';
    }
});
