const First_Player = 'x';
const Second_Player = 'o';
const Next_Player = {
    [First_Player]: Second_Player,
    [Second_Player]: First_Player
}

class TicTacToe {
    constructor() {
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = First_Player;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] != null) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = Next_Player[this.currentPlayer];
    }

    isFinished() {
        return this.getWinner() || null;
            // this.noMoreTurns();
    }

    getWinner() {
// const winnerByRow = this.gameField.map(row => row.every(p => p.findIndex(p=>p)))
    }

    noMoreTurns() {
        return this.gameField.every(row => row.every(col => col));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][columnIndex] ? this.gameField[rowIndex][columnIndex].First_Player : this.gameField[rowIndex][columnIndex].Second_Player
    }
}

module.exports = TicTacToe;
