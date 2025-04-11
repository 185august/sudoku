function updateView() {
    document.getElementById('app').innerHTML = `
    ${sudokuBoardView()}
    ${numbersView()}
    `
}
function initSudoku() {
    updateEmptyCellsList();
    sudokuPuzzleGenerator();
    updateView();
}



function makeABox() {

}

