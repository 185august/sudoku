function solver() {
    let isSolved = false;

    for (let row = 1; row <= 9; row++) {
        const rowLetter = String.fromCharCode(64 + row)

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
                    modelSudoku.data.board[squarePos].number = candidates[0]
                    modelSudoku.data.userNumbers.push(candidates[0])
                    updateView();
                } else {

                }
            }
        }
    }
}

function checkIfNumberIsValid(rowLetter, col, n, object) {
    let isNumInvalid = 0;
    for (let y = 1; y <= 9; y++) {
        const currentrow = rowLetter + y

        if (object[currentrow].number == n) {
            isNumInvalid++;
        }

    }
    for (let x = 1; x <= 9; x++) {
        const currentrow = String.fromCharCode(x + 64) + col
        if (object[currentrow].number == n) {
            isNumInvalid++;
        }
    }
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
    for (const grid of grids)
        if (grid.rows.includes(rowLetter) && grid.cols.includes(col)) {
            for (const r of grid.rows) {
                for (const c of grid.cols) {
                    if (object[r + c].number === n) {
                        isNumInvalid++;

                    }
                }
            }
        }
    if (isNumInvalid < 1) {
        console.log('shouldnt run ', isNumInvalid)
        return true;
    } else {
        return false;
    }
}

function checkIfNumberIsInGrid(rowLetter, col, n, object) {

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