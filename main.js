// Navbar Active State Update
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-icons .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Adjust logic to switch active link slightly before section comes into full view
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


// Tic-Tac-Toe Game Logic
const tttBoard = document.getElementById('ttt-board');
const tttStatus = document.getElementById('ttt-status');
const buttons = tttBoard.querySelectorAll('button');

let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
// User is 'X', Computer is 'O'
const userPlayer = 'X';
const compPlayer = 'O';

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Handle User Click
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('data-index');
    
    if (board[index] !== '' || !gameActive) return;

    board[index] = userPlayer;
    button.textContent = userPlayer;
    button.style.color = '#facc15'; // yellow for user

    checkWin();

    if (gameActive) {
      tttStatus.textContent = "Computer's turn...";
      tttBoard.classList.add('disabled');
      
      // Artificial delay for computer move
      setTimeout(() => {
        computerMove();
      }, 500);
    }
  });
});

function computerMove() {
  let emptyIndices = [];
  board.forEach((val, idx) => {
    if (val === '') emptyIndices.push(idx);
  });

  if (emptyIndices.length === 0) return;

  // Simple Random AI
  const randomIdx = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  
  board[randomIdx] = compPlayer;
  const btn = tttBoard.querySelector(`button[data-index="${randomIdx}"]`);
  btn.textContent = compPlayer;
  btn.style.color = '#22c55e'; // green for computer
  
  tttBoard.classList.remove('disabled');
  tttStatus.textContent = "Your turn (X)";
  
  checkWin();
}

function checkWin() {
  let roundWon = false;
  let winner = null;

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      winner = board[a];
      break;
    }
  }

  if (roundWon) {
    if (winner === userPlayer) {
      tttStatus.textContent = "You Win! 🎉";
      tttStatus.className = 'ttt-sub win';
    } else {
      tttStatus.textContent = "Computer Wins!";
      tttStatus.className = 'ttt-sub lose';
    }
    gameActive = false;
    tttBoard.classList.add('disabled');
    return;
  }

  if (!board.includes('')) {
    tttStatus.textContent = "It's a Draw!";
    tttStatus.className = 'ttt-sub draw';
    gameActive = false;
    return;
  }
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  tttStatus.textContent = "Your turn (X)";
  tttStatus.className = 'ttt-sub';
  tttBoard.classList.remove('disabled');
  
  buttons.forEach(button => {
    button.textContent = '';
    button.style.color = '';
  });
}
