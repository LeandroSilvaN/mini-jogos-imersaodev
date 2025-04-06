// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual é o verdadeiro formato da Terra?",
    respostas: [
      {
        opcao:
          "A Terra é completamente plana, igual a uma pizza gigante flutuando no espaço.",
        correto: false
      },
      {
        opcao:
          "A Terra é aproximadamente esférica, levemente achatada nos polos.",
        correto: true
      },
      {
        opcao: "A Terra é oca e dentro dela vivem dinossauros com Wi-Fi.",
        correto: false
      },
      {
        opcao: "A Terra tem o formato de um grande cubo, como no Minecraft.",
        correto: false
      }
    ]
  },
  {
    pergunta: "Qual é a capital da França?",
    respostas: [
      {
        opcao: "França não tem capital, é comandada por croissants.",
        correto: false
      },
      {
        opcao: "Torre Eiffel é a capital, porque é famosa.",
        correto: false
      },
      {
        opcao: "Paris, conhecida como a Cidade Luz.",
        correto: true
      },
      {
        opcao: "A capital é 'Françópolis', lógico!",
        correto: false
      }
    ]
  },
  {
    pergunta: "Quanto é 2 + 2?",
    respostas: [
      {
        opcao: "4, porque 2 somado com 2 dá exatamente isso.",
        correto: true
      },
      {
        opcao: "22, porque é só colar os números.",
        correto: false
      },
      {
        opcao: "Peixe, porque matemática é confusa mesmo.",
        correto: false
      },
      {
        opcao: "Zero, porque somar cancela tudo.",
        correto: false
      }
    ]
  },
  {
    pergunta: "Qual é o maior oceano do planeta?",
    respostas: [
      {
        opcao: "O Oceano de Chocolate, encontrado na Fantasilândia.",
        correto: false
      },

      {
        opcao: "Oceano de Lava que circunda o núcleo da Terra plana.",
        correto: false
      },
      {
        opcao: "A piscina do meu vizinho depois da chuva.",
        correto: false
      },
      {
        opcao: "Oceano Pacífico, que cobre a maior área da Terra.",
        correto: true
      }
    ]
  },
  {
    pergunta: "Quem descobriu o Brasil?",
    respostas: [
      {
        opcao: "Um alienígena chamado Zorp em 1500.",
        correto: false
      },
      {
        opcao: "O Bob Esponja em uma aventura submarina.",
        correto: false
      },
      {
        opcao: "Pedro Álvares Cabral, em 1500.",
        correto: true
      },
      {
        opcao: "Foi descoberto por um GPS que deu errado.",
        correto: false
      }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  let porcentagemAcertos = Number((acertos / perguntas.length) * 100);
  console.log(porcentagemAcertos); // Porcentagem de Acertos
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}, uma taxa de ${porcentagemAcertos} % de Acertos.`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
