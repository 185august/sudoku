function updateEmptyCellsList() {
    modelSudoku.data.emptyCells = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (modelSudoku.data.board[row][col].number === null) {
                const cell = modelSudoku.data.board[row][col]
                cell.candidates = [];
                for (let n = 1; n <= 9; n++) {
                    if (checkIfNumberIsValid(row, col, n, modelSudoku.data.board)) {
                        cell.candidates.push(n)
                    }
                }
                modelSudoku.data.emptyCells.push({ row, col, candidates: [...cell.candidates] });
            }
        }
    }
    modelSudoku.data.emptyCells.sort((a, b) => a.candidates.length - b.candidates.length);
}

function removeNakedSingles() {
    let changed;
    let iterations = 0;
    const maxIterations = 81;
    do {
        changed = false;
        updateEmptyCellsList()
        for (let i = 0; i < modelSudoku.data.emptyCells.length; i++) {
            const cell = modelSudoku.data.emptyCells[i]
            if (cell.candidates.length === 1) {
                placeNumber(cell.row, cell.col, cell.candidates[0])
                changed = true;
                iterations++;
                break;
            }
        }
        if (iterations >= maxIterations) {
            break;
        }
    } while (changed);
}

function improvedSolver() {
    const copyBoard = [...modelSudoku.data.board]
    if (modelSudoku.data.emptyCells.length === 0) return true;

    const currentCell = modelSudoku.data.emptyCells[0]
    const { row, col, candidates } = currentCell;
    console.log(currentCell)
    modelSudoku.data.algAttemps++
    if (modelSudoku.data.algAttemps > 1000000000) return false;
    for (const num of candidates) {
        if (checkIfNumberIsValid(row, col, num, modelSudoku.data.board)) {
            const prevBoard = JSON.parse(JSON.stringify(modelSudoku.data.board));
            const prevEmptyCells = [...modelSudoku.data.emptyCells]
            modelSudoku.data.emptyCells.shift();

            placeNumber(row, col, num);



            if (improvedSolver()) {
                modelSudoku.data.board = copyBoard
                return true;
            }

            modelSudoku.data.board = prevBoard;
            modelSudoku.data.emptyCells = prevEmptyCells;
        }
    }
    return false;
}

function placeNumber(row, col, num) {
    modelSudoku.data.board[row][col].number = num;
    updateAffectedCandidates(row, col, num);
    removeNakedSingles();
}

function updateAffectedCandidates(row, col, num) {

    for (let y = 0; y < 9; y++) {
        removeCandiates(row, y, num)
    }
    for (let x = 0; x < 9; x++) {
        removeCandiates(x, col, num)
    }
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            removeCandiates(boxRow + i, boxCol + j, num);
        }
    }
}

function removeCandiates(row, col, num) {
    const cell = modelSudoku.data.board[row][col];

    if (cell.number === null && cell.candidates.includes(num)) {
        cell.candidates = cell.candidates.filter(n => n !== num);
    }
}

function checkIfNumberIsValid(row, col, n, board) {
    for (let y = 0; y < 9; y++) {
        if (board[row][y].number === n) return false;

    }
    for (let x = 0; x < 9; x++) {
        if (board[x][col].number === n) return false;


    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[boxRow + i][boxCol + j].number === n) return false;
        }
    }
    return true;
}

