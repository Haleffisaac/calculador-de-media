const primeiraNota = document.querySelector("#in1")
const segundaNota = document.querySelector("#in2")
const terceiraNota = document.querySelector("#in3")
const quartaNota = document.querySelector("#in4") 
const resultado = document.querySelector("#resultado")

function calcularNota() {
  const media = (Number(primeiraNota.value) + Number(segundaNota.value) + Number(terceiraNota.value) + Number(quartaNota.value)) / 4
  
  if (media >= 5.0) {
    resultado.innerText = `A média é: ${media.toFixed(2)} - Parabêns você está aprovado! 🤗`
  } else {
    const pontosNecessarios = (5.0 * 4) - (Number(primeiraNota.value) + Number(segundaNota.value) + Number(terceiraNota.value) + Number(quartaNota.value))
    resultado.innerText = `A média é: ${media.toFixed(2)} - você ainda precisa de ${pontosNecessarios.toFixed(2)} pontos pra ser aprovado. Tente uma nota melhor em breve! 🙃`
  }
}

function validarNota(input) {
  // Permite apenas dígitos, uma vírgula e até duas casas decimais
  const regex = /^\d{0,2}(,\d{0,2})?$/;
  if (!regex.test(input.value)) {
    input.value = ''; // Limpa o input se não for válido
  } else {
    // Valida se o número é menor ou igual a 10
    const value = parseFloat(input.value.replace(',', '.'));
    if (value > 10) {
      input.value = ''; // Limpa se maior que 10
    }
  }
}

function calcularNota() {
  const notas = [
    document.getElementById('in1').value.replace(',', '.'),
    document.getElementById('in2').value.replace(',', '.'),
    document.getElementById('in3').value.replace(',', '.'),
    document.getElementById('in4').value.replace(',', '.')
  ].map(Number).filter(nota => !isNaN(nota)); // Filtra entradas válidas

  if (notas.length === 0) {
    document.getElementById('resultado').textContent = 'Por favor, insira notas válidas.';
    return;
  }

  const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  document.getElementById('resultado').textContent = `Média: ${media.toFixed(2).replace('.', ',')}`;
}