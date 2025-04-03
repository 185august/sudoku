function sudokuBoardView() {
    let sudokuBoardHtml = `
    <div class="allSquares">
        ${Object.values(modelSudoku.data.board).map(element =>
        `<div class="square ${'row_' + element.x} ${'col_' + element.y}" onclick="insertNumber('${element.x}', ${element.y})">${element.number ?? ''} </div>`).join('')}
    </div>
    `
    return sudokuBoardHtml;
}

function rowAndColArray() {
    for (let row = 1; row <= 9; row++) {
        const rowLetter = String.fromCharCode(64 + row)
        for (let col = 1; col <= 9; col++) {
            const cellPosition = rowLetter + col
            modelSudoku.data.board[cellPosition] =
            {
                x: rowLetter,
                y: col,
                number: null

            }
        }
    }
}