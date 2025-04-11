function numbersView() {
    let numbersHtml = `<div class="remove-number" onclick="selectNumber(this)">x</div>
    <button onclick="callSolver()">solver</button>
    <button onclick="removeNumbersFromPuzzle()">Fjern tall</button>`
    numbersHtml += "<div class='all-numbers'>";
    for (let i = 1; i <= 9; i++) {
        numbersHtml += `<div class="numbers" onclick="selectNumber(this)"> ${i} </div>`
    }
    numbersHtml += `</div>`

    return numbersHtml
}