function createASudoku() {

    for (let row = 1; row <= 9; row++) {
        const rowLetter = String.fromCharCode(64 + row)
        let usedNumbers = [];

        for (let col = 1; col <= 9; col++) {
            const squarePos = rowLetter + col;
            let numberFound = false;
            while (!numberFound) {
                const randomNumber = Math.floor(Math.random() * (9)) + 1;

                if (usedNumbers.indexOf(randomNumber) === -1) {
                    usedNumbers.push(randomNumber);
                    modelSudoku.data.board[squarePos] = {
                        x: rowLetter,
                        y: col,
                        number: randomNumber
                    };
                    numberFound = true;
                }
            }
        }
    }
    for (let col = 1; col <= 9; col++) {
        let numbersThisCol = [];
        for (let row = 1; row <= 9; row++) {
            const rowLetter = String.fromCharCode(64 + row);
            const squarePos = rowLetter + col;
            numbersThisCol.push(modelSudoku.data.board[squarePos].number)
            while (numbersThisCol.filter(num => num === modelSudoku.data.board[squarePos].number).length > 1) {
                console.log(squarePos);
                const randomNumber = Math.floor(Math.random() * (9)) + 1;
                modelSudoku.data.board[squarePos].number = randomNumber;
            }
        }
    }
    updateView();
}
