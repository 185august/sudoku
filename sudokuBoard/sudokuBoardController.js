function insertNumber(x, y) {
    if (modelSudoku.data.selectedNumber === undefined) return;
    if (modelSudoku.data.selectedNumber === 0) {
        modelSudoku.data.board[x][y].number = null;
    } else {
        modelSudoku.data.board[x][y].number = modelSudoku.data.selectedNumber;
    }
    updateView();
}

function callSolver() {
    modelSudoku.data.algAttemps = 0;

    const originalBoard = JSON.parse(JSON.stringify(modelSudoku.data.board));

    if (solver()) {
        updateView();
        console.log('found the solution');
    } else {
        modelSudoku.data.board = originalBoard;
        updateView();
        console.log('no solution');
    }
}