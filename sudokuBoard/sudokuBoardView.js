function sudokuBoardView() {
    let sudokuBoardHtml = `<div class="container-cells">`
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            sudokuBoardHtml += `<div class="cell ${'row_' + row} ${'col_' + col}" onclick="insertNumber('${row}', ${col})">${modelSudoku.data.board[row][col].number ?? ''} </div>`
        }
    }
    sudokuBoardHtml += `</div>`
    /* let sudokuBoardHtml = `
    <div class="allSquares">
        ${modelSudoku.data.board.map((element) =>
        `<div class="square ${'row'} ${'col'}" onclick="insertNumber('${element.x}', ${element.y})">${element.number ?? ''} </div>`).join('')}
    </div>
    ` */
    return sudokuBoardHtml;
}

function rowAndColArray() {
    let copyOfPuzzle = [...modelSudoku.data.sudokuPuzzle[0]]
    modelSudoku.data.board = Array(9).fill().map(() => Array(9).fill(null))
    modelSudoku.data.solver = Array(9).fill().map(() => Array(9).fill(null))
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let currentNumber = copyOfPuzzle[0]
            if (currentNumber === 0) {
                currentNumber = null
            }
            modelSudoku.data.board[row][col] =
            {
                number: currentNumber
            };

            modelSudoku.data.solver[row][col] = [
                null
            ],
                modelSudoku.data.userNumbers.push(currentNumber);
            copyOfPuzzle.splice(0, 1)
        }
    }
}