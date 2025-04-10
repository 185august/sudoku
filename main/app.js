function updateView() {
    document.getElementById('app').innerHTML = `
    ${sudokuBoardView()}
    ${numbersView()}
    `
}
function initSudoku() {
    sudokuPuzzleGenerator();
    updateView();
}



function makeABox() {

}

