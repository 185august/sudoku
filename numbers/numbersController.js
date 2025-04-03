function selectNumber(element) {
    element.classList.add('selected-number');
    if (element.innerHTML === 'x') {
        modelSudoku.data.selectedNumber = 0;
    } else {
        modelSudoku.data.selectedNumber = element.innerHTML
    }
    let previousElement = element;
}