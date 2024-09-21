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
    resultado.innerText = `A média é: ${media.toFixed(2)} - Opps, parece que você ainda precisa de ${pontosNecessarios.toFixed(2)} pontos pra ser aprovado. Tente uma nota melhor em breve! 🙃`
  }
}
