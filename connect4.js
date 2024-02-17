const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const TOKEN1 = "X";
const TOKEN2 = "O";

const mapPlayerToToken = {
  X: "Player 1",
  O: "Player 2",
};

const createNewGrid = () => {
  const grid = new Array(6).fill("-").map(() => new Array(7).fill("-"));
  return grid;
};

function displayGrid(grid) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      process.stdout.write(grid[r][c]);
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
}

const traverseNorth = (grid, row, column, tokenType) => {
  if (row < 3) {
    return false;
  }

  let numMatches = 0;
  for (let r = row - 1; r >= 0; r--) {
    if (grid[r][column] !== tokenType) {
      break;
    }
    numMatches++;
  }
  return numMatches >= 3;
};

const traverseEast = (grid, row, column, tokenType) => {
  if (column > grid[0].length - 4) {
    return false;
  }

  let numMatches = 0;
  for (let c = column + 1; c < grid[0].length; c++) {
    if (grid[row][c] !== tokenType) {
      break;
    }
    numMatches++;
  }
  return numMatches >= 3;
};

const traverseNorthEast = (grid, row, column, tokenType) => {
  if (row < 3 || column > grid[0].length - 4) {
    return false;
  }

  let numMatches = 0;
  let r;
  let c;
  for (r = row - 1, c = column + 1; r >= 0 && c < grid[0].length; r--, c++) {
    if (grid[r][c] !== tokenType) {
      break;
    }
    numMatches++;
  }
  return numMatches >= 3;
};

const isWinningCell = (grid, row, column) => {
  return (
    traverseNorth(grid, row, column, grid[row][column]) ||
    traverseEast(grid, row, column, grid[row][column]) ||
    traverseNorthEast(grid, row, column, grid[row][column])
  );
};

const checkGameStatus = (grid) => {
  for (let r = grid.length - 1; r >= 0; r--) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] !== "-") {
        if (isWinningCell(grid, r, c, grid[r][c])) {
          return `${mapPlayerToToken[grid[r][c]]} Wins`;
        }
      }
    }
  }
};

const addToken = (grid, column, tokenType) => {
  for (let r = grid.length - 1; r >= 0; r--) {
    if (grid[r][column] === "-") {
      grid[r][column] = tokenType;
      break;
    }
  }
};

const playerTurn = (grid, column, tokenType) => {
  addToken(grid, column, tokenType);
  displayGrid(grid);
};

const gamePlay = () => {
  const gameGrid = createNewGrid();
  const isGameFinished = false;
  const turnCount = 0;
  console.log("The player discs are as follows: ");
  for (const key in mapPlayerToToken) {
    console.log(`${key}: ${mapPlayerToToken[key]}`);
  }
  while (!isGameFinished && count <= 42) {
    count++;
    for (const key in mapPlayerToToken) {
      console.log(`${key}: ${mapPlayerToToken[key]}`);
    }
  }
};

gamePlay();
playerTurn(grid, 1, TOKEN1);
playerTurn(grid, 2, TOKEN1);
playerTurn(grid, 3, TOKEN1);
playerTurn(grid, 4, TOKEN1);
console.log(checkGameStatus(grid));
