const returnBtn = document.getElementById('return-btn');
const board = document.getElementById('board');
const teamXPointsEl = document.getElementById('team-x-points');
const teamOPointsEl = document.getElementById('team-o-points');
const resetBoardBtn = document.getElementById('reset-board');
const restartGameBtn = document.getElementById('restart-game');
const resultPopup = document.getElementById('result-popup');
const resultMessage = document.getElementById('result-message');
const closeResultBtn = document.getElementById('close-result');

let currentPlayer = 'X';
let teamXPoints = 0;
let teamOPoints = 0;
let gameActive = true;

// Initialize the board
function initializeBoard() {
  board.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    board.appendChild(cell);
  }
}

// Check for winner
function checkWinner() {
  const cells = Array.from(document.getElementsByClassName('cell'));
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

// Handle cell click
function handleCellClick(event) {
  const cell = event.target;
  if (!gameActive || cell.classList.contains('taken')) return;

  cell.textContent = currentPlayer;
  cell.classList.add('taken');

  if (checkWinner()) {
    if (currentPlayer === 'X') {
      teamXPoints++;
      teamXPointsEl.textContent = teamXPoints;
      resultMessage.textContent = "Team X Wins!";
    } else {
      teamOPoints++;
      teamOPointsEl.textContent = teamOPoints;
      resultMessage.textContent = "Team O Wins!";
    }
    resultPopup.style.display = 'flex';
    gameActive = false;
  } else if (Array.from(document.getElementsByClassName('cell')).every(cell => cell.classList.contains('taken'))) {
    resultMessage.textContent = "It's a Draw!";
    resultPopup.style.display = 'flex';
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Close the result popup
closeResultBtn.addEventListener('click', () => {
  resultPopup.style.display = 'none';
});

// Reset the board for a new game
resetBoardBtn.addEventListener('click', () => {
  gameActive = true;
  currentPlayer = 'X';
  initializeBoard();
  resultPopup.style.display = 'none';
});

// Restart the game and reset points
restartGameBtn.addEventListener('click', () => {
  teamXPoints = 0;
  teamOPoints = 0;
  teamXPointsEl.textContent = teamXPoints;
  teamOPointsEl.textContent = teamOPoints;
  gameActive = true;
  currentPlayer = 'X';
  initializeBoard();
  resultPopup.style.display = 'none';
});

// Add event listener to cells
board.addEventListener('click', handleCellClick);

// Initialize the game directly
initializeBoard();

// Redirect to holder.html when the return button is clicked
returnBtn.addEventListener('click', () => {
  window.location.href = 'holder.html'; // Redirect to holder.html
});
