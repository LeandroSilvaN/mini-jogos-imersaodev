let passou = 0;
let venceu = 0;
function jogar() {
  for (let rodada = 1; rodada <= 3; rodada++) {
    let escolhaJogador = prompt("Nivel: " + rodada + ", porta (1, 2 ou 3)??");
    let portaErrada = Math.floor(Math.random() * 3) + 1;
    if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
      alert("Por favor, apenas o número 1, 2 ou 3.");
      continue;
    }
    if (escolhaJogador == portaErrada) {
      // escolheu a porta errada
      alert("Que pena, não é a porta certa!");
    } else {
      alert(
        "Acertou, Você escolheu a porta " +
          escolhaJogador +
          " e a porta errada era " +
          portaErrada
      );
      passou++;
    }

    if (rodada == 4 && passou < 3) {
      alert("Você perdeu, tente novamente.");
      rodada = 1; // Reinicia rodada
      break;
    }

    if (passou == 3) {
      venceu++;
      alert("Você venceu! Parabéns!");
      alert("Quantidade de vitórias: " + venceu);
      rodada = 1; // Reinicia rodada
      break;
    }
  }

  // Pergunta se o jogador deseja jogar novamente
  let jogarNovamente = confirm("Deseja jogar novamente?");
  if (jogarNovamente) {
    passou = 0;
    rodada = 1;
    jogar(); // Chama a função jogar novamente
  } else {
    alert("Obrigado por jogar! Até a próxima!");
  }
}

jogar(); // Inicia o jogo
