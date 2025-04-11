function sudokuPuzzleGenerator() {

    if (modelSudoku.data.emptyCells.length === 0) return true;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const num = modelSudoku.data.emptyCells[0].candidates[getRandomNumber(0, modelSudoku.data.emptyCells[0].candidates.length)]
            if (checkIfNumberIsValid(row, col, num, modelSudoku.data.board)) {
                const prevBoard = JSON.parse(JSON.stringify(modelSudoku.data.board));
                const prevEmptyCells = [...modelSudoku.data.emptyCells]
                modelSudoku.data.emptyCells.shift();

                placeNumber(row, col, num);



                if (improvedSolver()) return true;

                modelSudoku.data.board = prevBoard;
                modelSudoku.data.emptyCells = prevEmptyCells;
            }
        }
        return false;

    }

}


function removeNumbersFromPuzzle() {
    let attempts = 10;
    while (attempts > 0) {
        let x = getRandomNumber(0, 9);
        let y = getRandomNumber(0, 9);
        while (modelSudoku.data.board[x][y].number === 0) {
            x = getRandomNumber(0, 9);
            y = getRandomNumber(0, 9);
        }
        let backup = modelSudoku.data.board[x][y].number;
        modelSudoku.data.board[x][y] = 0;
        modelSudoku.data.solutions = 0;
        modelSudoku.data.algAttemps = 0;

        countSolutions();

        if (modelSudoku.data.solutions != 1) {
            modelSudoku.data.board[x][y].number = backup;

        }
        attempts--;
    }
    updateView();
}

function countSolutions() {
    const copyBoard = [...modelSudoku.data.board]
    if (modelSudoku.data.emptyCells.length === 0) {
        modelSudoku.data.solutions++
        return true;
    }
    const currentCell = modelSudoku.data.emptyCells[0]
    const { row, col, candidates } = currentCell;
    modelSudoku.data.algAttemps++
    if (modelSudoku.data.algAttemps > 1000000000) return false;
    for (const num of candidates) {
        if (checkIfNumberIsValid(row, col, num, modelSudoku.data.board)) {
            const prevBoard = JSON.parse(JSON.stringify(modelSudoku.data.board));
            const prevEmptyCells = [...modelSudoku.data.emptyCells]
            modelSudoku.data.emptyCells.shift();

            placeNumber(row, col, num);

            countSolutions()

            modelSudoku.data.board = prevBoard;
            modelSudoku.data.emptyCells = prevEmptyCells;
        }
    }
    return false;
}