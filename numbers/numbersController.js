let previousElement;
function selectNumber(element) {
    previousElement = parseInt(element);

    element.classList.add('selected-number');
    if (element.innerHTML === 'x') {
        modelSudoku.data.selectedNumber = 0;
    } else {
        modelSudoku.data.selectedNumber = parseInt(element.innerHTML)
    }
}