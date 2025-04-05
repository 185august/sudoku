function solver() {
    let madeProgress = true;
    let iterations = 0;
    const maxIterations = 100;

    while (madeProgress && iterations < maxIterations) {
        iterations++;
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (modelSudoku.data.board[row][col].number === null) {
                    let candidates = [];
                    for (let n = 1; n <= 9; n++) {
                        if (checkIfNumberIsValid(row, col, n, modelSudoku.data.board)) {
                            candidates.push(n);
                        }
                    }
                    if (candidates.length === 1) {
                        modelSudoku.data.board[row][col].number = candidates[0];
                        modelSudoku.data.userNumbers.push(candidates[0]);
                        madeProgress = true;
                    }
                }
            }
        }
        if (madeProgress) {
            updateView();
        }
    }
    const isSolved = checkIfSolved();
    if (isSolved) {
        console.log('sudoku is solved!');
    } else if (iterations >= maxIterations) {
        console.log("couldn't find the solution");
    }
}

function checkIfSolved() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (modelSudoku.data.board[row][col].number === null) {
                return false;
            }
        }
    }
    return true;
}

function checkIfNumberIsValid(row, col, n, array) {
    let isNumInvalid = 0;
    const grids = [
        { rows: [0, 1, 2], cols: [0, 1, 2], name: 'grid1' },
        { rows: [0, 1, 2], cols: [3, 4, 5], name: 'grid2' },
        { rows: [0, 1, 2], cols: [6, 7, 8], name: 'grid3' },
        { rows: [3, 4, 5], cols: [0, 1, 2], name: 'grid4' },
        { rows: [3, 4, 5], cols: [3, 4, 5], name: 'grid5' },
        { rows: [3, 4, 5], cols: [6, 7, 8], name: 'grid6' },
        { rows: [6, 7, 8], cols: [0, 1, 2], name: 'grid7' },
        { rows: [6, 7, 8], cols: [3, 4, 5], name: 'grid8' },
        { rows: [6, 7, 8], cols: [6, 7, 8], name: 'grid9' }
    ];
    let currentGrid
    for (const grid of grids)
        if (grid.rows.includes(row) && grid.cols.includes(col)) {
            currentGridgrid = grid.name;
        }
    for (let y = 0; y < 9; y++) {

        if (array[row][y].number == n) {
            isNumInvalid++;
            if (!modelSudoku.data.solver[row][col].includes(n)) {
                modelSudoku.data.solver[row][col] += [n,];
            }
        }

    }
    for (let x = 0; x < 9; x++) {

        if (array[col][x].number == n) {
            isNumInvalid++;
            if (!modelSudoku.data.solver[row][col].includes(n)) {
                modelSudoku.data.solver[row][col] += [n,];
            }
        }

    }

    for (const grid of grids)
        if (grid.rows.includes(row) && grid.cols.includes(col)) {
            for (const r of grid.rows) {
                for (const c of grid.cols) {
                    if (array[r][c].number === n) {
                        if (!modelSudoku.data.solver[row][col].includes(n)) {
                            modelSudoku.data.solver[row][col] += [n,];
                        }
                        isNumInvalid++;
                    }
                }
            }
            if (isNumInvalid < 1) {
                return true;
            } else {
                return false;
            }
        }
}




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