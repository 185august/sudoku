function solver() {
    let madeProgress = true;
    let iterations = 0;
    const maxIterations = 100;

    while (madeProgress && iterations < maxIterations) {
        iterations++;
        for (let row = 1; row <= 9; row++) {
            const rowLetter = String.fromCharCode(64 + row);

            for (let col = 1; col <= 9; col++) {
                const squarePos = rowLetter + col;
                if (modelSudoku.data.board[squarePos].number === null) {
                    let candidates = [];
                    for (let n = 1; n <= 9; n++) {
                        if (checkIfNumberIsValid(rowLetter, col, n, modelSudoku.data.board)) {
                            candidates.push(n);
                        }
                    }
                    if (candidates.length === 1) {
                        modelSudoku.data.board[squarePos].number = candidates[0];
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
    for (let row = 1; row <= 9; row++) {
        const rowLetter = String.fromCharCode(64 + row)
        for (let col = 1; col <= 9; col++) {
            const squarePos = rowLetter + col;
            if (modelSudoku.data.board[squarePos].number === null) {
                return false;
            }
        }
    }
    return true;
}

function checkIfNumberIsValid(rowLetter, col, n, object) {
    let isNumInvalid = 0;
    const grids = [
        { rows: ['A', 'B', 'C'], cols: [1, 2, 3], name: 'grid1' },
        { rows: ['A', 'B', 'C'], cols: [4, 5, 6], name: 'grid2' },
        { rows: ['A', 'B', 'C'], cols: [7, 8, 9], name: 'grid3' },
        { rows: ['D', 'E', 'F'], cols: [1, 2, 3], name: 'grid4' },
        { rows: ['D', 'E', 'F'], cols: [4, 5, 6], name: 'grid5' },
        { rows: ['D', 'E', 'F'], cols: [7, 8, 9], name: 'grid6' },
        { rows: ['G', 'H', 'I'], cols: [1, 2, 3], name: 'grid7' },
        { rows: ['G', 'H', 'I'], cols: [4, 5, 6], name: 'grid8' },
        { rows: ['G', 'H', 'I'], cols: [7, 8, 9], name: 'grid9' }
    ];
    let currentGrid
    for (const grid of grids)
        if (grid.rows.includes(rowLetter) && grid.cols.includes(col)) {
            currentGridgrid = grid.name
        }
    for (let y = 1; y <= 9; y++) {
        const currentCell = rowLetter + y;

        if (object[currentCell].number == n) {
            isNumInvalid++;
            if (!modelSudoku.data.solver[rowLetter + col].includes(n)) {
                modelSudoku.data.solver[rowLetter + col] += [n,]
            }
        }

    }
    for (let x = 1; x <= 9; x++) {
        const currentCell = String.fromCharCode(x + 64) + col;
        if (object[currentCell].number == n) {
            isNumInvalid++;
            if (!modelSudoku.data.solver[rowLetter + col].includes(n)) {
                modelSudoku.data.solver[rowLetter + col] += [n,]
            }
        }

    }

    for (const grid of grids)
        if (grid.rows.includes(rowLetter) && grid.cols.includes(col)) {
            for (const r of grid.rows) {
                for (const c of grid.cols) {
                    if (object[r + c].number === n) {
                        if (!modelSudoku.data.solver[rowLetter + col].includes(n)) {
                            modelSudoku.data.solver[rowLetter + col] += [n,]
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