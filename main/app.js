function updateView() {
    document.getElementById('app').innerHTML = `
    ${sudokuBoardView()}
    ${numbersView()}
    `
}
function initSudoku() {
    rowAndColArray();
    updateView();
}



function makeABox() {

}

