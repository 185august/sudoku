function updateView() {
    document.getElementById('app').innerHTML = `
    ${sudokuBoardView()}
    ${numbersView()}
    `
}
function initSudoku() {
    createASudoku();
    updateView();
}



function makeABox() {

}

