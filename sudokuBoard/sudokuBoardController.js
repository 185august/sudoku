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
    solver()
    if (solver()) {
        updateView();
        console.log('found the solution');
    } else {
        console.log('no solution');
    }
}