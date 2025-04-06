idade = prompt("Quantos anos você tem?");

function jogar(){
if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-Pedra, 2-Papel, ou 3-Tesoura:");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Jogador Pedra, Computador Pedra --> será empate!
  // Jogador Papel, Computador Papel --> será empate!
  // Jogador Tesoura, Computador Tesoura --> será empate!

  if (escolhaJogador == escolhaComputador) {
    alert("Empate!!!");
  }

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      // Jogador Pedra, Computador Papel --> Computador vence!
      alert("Computador Venceu! Papel cobre Pedra.");
    }
    if (escolhaComputador == 3) {
      // Jogador Pedra, Computador Tesoura --> Jogador vence!
      alert("Você venceu! Pedra quebra Tesoura.");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      // Jogador Papel, Computador Pedra --> Jogador vence!
      alert("Você venceu! Papel cobre Pedra.");
    }
    if (escolhaComputador == 3) {
      // Jogador Papel, Computador Tesoura --> Computador vence!
      alert("Computador venceu! Tesoura corta Papel.");
    }
  }

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      // Jogador Tesoura, Computador Pedra --> Computador vence!
      alert("Computador venceu! Pedra quebra Tesoura.");
    }
    if (escolhaComputador == 2) {
      // Jogador Tesoura, Computador Papel --> Jogador vence!
      alert("Você venceu! Tesoura corta Papel");
    }
  }

  if (escolhaComputador == 1) {
    alert("Escolha do Computador: Pedra");
  }
  if (escolhaComputador == 2) {
    alert("Escolha do Computador: Papel");
  }
  if (escolhaComputador == 3) {
    alert("Escolha do Computador: Tesoura");
  }
} else {
  alert("Você NÃO pode jogar jokenpo!");
}
  }
jogar();