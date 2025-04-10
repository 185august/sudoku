function insertNumber(row, col) {
    if (modelSudoku.data.selectedNumber === undefined) return;
    if (modelSudoku.data.selectedNumber === 0) {
        modelSudoku.data.board[row][col].number = null;
    } else {
        modelSudoku.data.board[row][col].number = modelSudoku.data.selectedNumber;
    }
    updateView();
}

function callSolver() {
    modelSudoku.data.algAttemps = 0;

    const originalBoard = JSON.parse(JSON.stringify(modelSudoku.data.board));
    removeNakedSingles();

    if (improvedSolver()) {
        console.log('the sudoku is valid');
        updateView();
    } else {
        modelSudoku.data.board = originalBoard;
        updateView();
        console.log('no solution');
    }
}