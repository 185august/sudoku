function scanForCandidates() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (modelSudoku.data.board[row][col].number === null) {
                const cell = modelSudoku.data.board[row][col]
                for (let n = 1; n <= 9; n++) {
                    if (checkIfNumberIsValid(row, col, n, modelSudoku.data.board)) {
                        if (!cell.candidates.includes(n)) {
                            cell.candidates.push(n,)
                        }
                    }
                }
                if (cell.candidates.length != 0 && cell.candidates.length === 1) {
                    cell.number = cell.candidates
                    cell.candidates = [];
                }
            }
        }
    }
}
function solver() {

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            modelSudoku.data.algAttemps++

            if (modelSudoku.data.algAttemps > 10000000) return false;
            if (modelSudoku.data.board[row][col].number === null) {
                for (let n = 1; n <= 9; n++) {
                    if (checkIfNumberIsValid(row, col, n, modelSudoku.data.board)) {
                        modelSudoku.data.board[row][col].number = n;
                        if (solver()) {
                            return true;
                        }
                        modelSudoku.data.board[row][col].number = null;
                    }
                }

                return false;
            }
        }
    }
    return true
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

