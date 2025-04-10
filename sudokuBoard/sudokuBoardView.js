function sudokuBoardView() {
    let sudokuBoardHtml = `<div class="container-cells">`
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            sudokuBoardHtml += `<div class="cell ${'row_' + row} ${'col_' + col}" 
            onclick="insertNumber(${row}, ${col})">${modelSudoku.data.board[row][col].number ?? ''} </div>`
        }
    }
    sudokuBoardHtml += `</div>`
    return sudokuBoardHtml;
}

function rowAndColArray(index = 6) {
    let copyOfPuzzle = [...modelSudoku.data.puzzles[index]]

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const currentNumber = copyOfPuzzle[row * 9 + col]
            modelSudoku.data.board[row][col] =
            {
                number: currentNumber === 0 ? null : currentNumber,
                candidates: []
            };

        }
    }
    updateView();
}