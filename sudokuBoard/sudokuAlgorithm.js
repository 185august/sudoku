function solver() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (modelSudoku.data.board[row][col].number === null) {
                for (let n = 1; n < 10; n++) {
                    if (checkIfNumberIsValid(row, col, n, modelSudoku.data.board)) {
                        modelSudoku.data.board[row][col].number = n
                        if (solver()) {
                            return true;
                        }
                        modelSudoku.data.board[row][col].number = null
                    }
                }
                return;
            }
        }
    }
    return true
}
function checkIfNumberIsValid(row, col, n, array) {
    for (let y = 0; y < 9; y++) {
        if (array[row][y].number === n) {
            return false;
        }

    }
    for (let x = 0; x < 9; x++) {
        if (array[x][col].number === n) {
            return false;
        }

    }

    const row0 = Math.floor(row / 3) * 3;
    const col0 = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[row0 + i][col0 + j].number == n) {
                return false;
            }
        }
    }
    return true;
}

/*  const grids = [
    { rows: [0, 1, 2], cols: [0, 1, 2], name: 'grid1' },
    { rows: [0, 1, 2], cols: [3, 4, 5], name: 'grid2' },
    { rows: [0, 1, 2], cols: [6, 7, 8], name: 'grid3' },
    { rows: [3, 4, 5], cols: [0, 1, 2], name: 'grid4' },
    { rows: [3, 4, 5], cols: [3, 4, 5], name: 'grid5' },
    { rows: [3, 4, 5], cols: [6, 7, 8], name: 'grid6' },
    { rows: [6, 7, 8], cols: [0, 1, 2], name: 'grid7' },
    { rows: [6, 7, 8], cols: [3, 4, 5], name: 'grid8' },
    { rows: [6, 7, 8], cols: [6, 7, 8], name: 'grid9' }
]; */
/* for (const grid of grids)
    if (grid.rows.includes(row) && grid.cols.includes(col)) {
        for (const r of grid.rows) {
            for (const c of grid.cols) {
                if (array[r][c].number === n) {
                    if (!modelSudoku.data.solver[row][col].includes(n)) {
                        modelSudoku.data.solver[row][col] += [n,];
                    }
                    return false;
                }
            }
        }
    } */
/* if (isNumInvalid < 1) {
    return true;
} else {
    return false;
} */




/* function solverold() {

    for (let row = 1; row <= 9; row++) {
        const rowLetter = String.fromCharCode(64 + row)

        for (let col = 1; col <= 9; col++) {
            const squarePos = rowLetter + col;
            if (modelSudoku.data.board[squarePos].number === 0) {
                let candidates = [];

                for (let n = 1; n < 9; n++) {
                    if (this.checkIfNumberIsValid(x, y, n, modelSudoku.data.board))
                        candidates.push(n);

                }
            }

             while (!numberFound) {
                const randomNumber = Math.floor(Math.random() * (9)) + 1;
 
                if (usedNumbers.indexOf(randomNumber) === -1) {
                    usedNumbers.push(randomNumber);
                    modelSudoku.data.board[squarePos] = {
                        x: rowLetter,
                        y: col,
                        number: randomNumber
                    };
                    numberFound = true;
                }
            }
        }
    }
    /* for (let col = 1; col <= 9; col++) {
        let numbersThisCol = [];
        for (let row = 1; row <= 9; row++) {
            const rowLetter = String.fromCharCode(64 + row);
            const squarePos = rowLetter + col;
            numbersThisCol.push(modelSudoku.data.board[squarePos].number)
            while (numbersThisCol.filter(num => num === modelSudoku.data.board[squarePos].number).length > 1) {
                console.log(squarePos);
                const randomNumber = Math.floor(Math.random() * (9)) + 1;
                modelSudoku.data.board[squarePos].number = randomNumber;
            }
        }
    }
    updateView();
}
 */