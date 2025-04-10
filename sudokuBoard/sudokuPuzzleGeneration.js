function sudokuPuzzleGenerator() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            modelSudoku.data.board[row][col].number = randomNumber;
            updateView();
        }
    }
}