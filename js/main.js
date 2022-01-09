const x = document.querySelector('.x');
const o = document.querySelector('.o');
const boxs = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('#buttons-container button');
const messageContainer = document.querySelector('#message');
const messageText = document.querySelector('#message p');
let secondPlayer;

// Contador de Jogadas
let player1 = 0; 
let player2 = 0;

// Adicionando evento click nas boxs
boxs.forEach(item => {
  item.addEventListener('click', () => {
    let el = checkEl(player1, player2);
    if (item.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      item.appendChild(cloneEl);

      // Computar Jogada
      if  (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

      // Checa quem venceu
      checkWinCodition();
    }
  })
}) 

// Verifica quem vai jogar
const checkEl = (player1, player2) => {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }
  return el;
}

// Checa quem venceu
const checkWinCodition = () => {
  let b1 = document.getElementById('block1');
  let b2 = document.getElementById('block2');
  let b3 = document.getElementById('block3');
  let b4 = document.getElementById('block4');
  let b5 = document.getElementById('block5');
  let b6 = document.getElementById('block6');
  let b7 = document.getElementById('block7');
  let b8 = document.getElementById('block8');
  let b9 = document.getElementById('block9');

  // Horizontal
  if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declareWinner('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declareWinner('o');
    }
  }
  if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
  
    if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
      declareWinner('x');
    } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
      declareWinner('o');
    }
  }
  if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
  
    if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
      declareWinner('x');

    } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
      declareWinner('o');
    }
  }

  // Vertical
  if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
  
    if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
      declareWinner('x');
    } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
      declareWinner('o');
    }
  }
  if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
  
    if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
      declareWinner('x');
    } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
      declareWinner('o');
    }
  }
  if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
  
    if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
      declareWinner('x');
    } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
      declareWinner('o');
    }
  }

  // Diagonal
  if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
  
    if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
      declareWinner('x');
    } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
      declareWinner('o');
    }
  }
  if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
  
    if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
      declareWinner('x');
    } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
      declareWinner('o');
    }
  }

  // Velha
  let counter = 0;

  boxs.forEach(item => {
    if (item.childNodes[0] != undefined) {
      counter++;
    }

    if (counter == 9) {
      declareWinner('Deu velha!');
    }
  })
}

// Limpa o Jogo, declara vencedor e atualiza o placar
const declareWinner = (winner) => {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = '';

  if (winner == 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = 'O jogador 1 Venceu!';
  } else if (winner == 'o'){
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = 'O jogador 2 Venceu!';
  } else {
    msg = 'Deu Velha!';
  }

  // Exibir mensagem
  messageText.innerHTML = msg;
  messageContainer.classList.remove('hide');

  // Esconde mensagem 
  setTimeout(() => {
    messageContainer.classList.add('hide');
  }, 2000);

  // Zerar jogadas
  player1 = 0; 
  player2 = 0;

  // Remove X / O
  let boxsToRemove = document.querySelectorAll('.box > div');
  boxsToRemove.forEach(item => {
    item.parentNode.removeChild(item);
  })
}