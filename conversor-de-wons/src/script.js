function conversor() {
valorwons = prompt('Digite um valor em wons')
umwon = 0.0040
conversorwons = valorwons * umwon
  if (conversorwons < 0.01) {
alert('O prêmio em Wons convertido fica R$' + conversorwons)
  } else {
  alert('O prêmio em Wons convertido fica R$' + conversorwons.toFixed(2))
  }
}
conversor()