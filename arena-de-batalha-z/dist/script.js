//Preciso criar uma lista com os 3 jogadores

let personagem = ["", "", ""];
let viloes = ["", "", ""];

forcaPersonagem = 0;
forcaViloes = 0;

for (let i = 0; i < 3; i++) {
  escolhaPersonagem = prompt("Digite o nome do seu personagem: " + (i + 1));
  personagem[i] = escolhaPersonagem;
  //Calcular a força de cada jogador, e depois somar para saber a força do time
  forcaPersonagem += Math.floor(Math.random() * 100) + 10000;
}

for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 10) + 1;
  viloesPossiveis = ['Freeza', 'Cell', 'Majin Buu', 'Broly', 'Raditz', 'Nappa' ,'Majin Vegeta ','Goku Black','Zamasu','Omega Shenron'];
  viloes[i] = viloesPossiveis[indiceAleatorio];
  //Calcular a força de cada jogador do time do computador, e depois somar para saber a força do time
  forcaViloes += Math.floor(Math.random() * 100) + 10000;
}

personagemTime = document.getElementById("informacoesJogador");
personagemTime.innerHTML = (personagem);

viloesTime = document.getElementById("informacoesComputador");
viloesTime.innerHTML = (viloes);

//Comparar o dois times para saber quem venceu
function verResultado() {
if (forcaPersonagem > forcaViloes) {
  alert("Você venceu! Seu time é muito forte! O poder de luta do seu time é: " + forcaPersonagem);
} else {
  if (forcaViloes > forcaPersonagem) {
    alert(" Você perdeu! Seu time é muito fraco! O poder de luta dos viloes é: " + forcaViloes);
  }
  else {
    alert("Que batalha lendária!!! Vocês empataram!")
  }
}
  
  resultado = document.getElementById("resultadoFinal");
  resultado.innerHTML = (`Poder do time: ${forcaPersonagem} VS Poder dos Vilões: ${forcaViloes}`);
}