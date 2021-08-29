class TicTacToe {

    gameField = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null], 
    ]
    CurrentPlayer = "x";


    //ready
    getCurrentPlayerSymbol() {
        return this.CurrentPlayer;
    }

    
    nextTurn(rowIndex, columnIndex) {

        //should properly update class state (change current player, update marks storage etc.)
        if (this.gameField[rowIndex][columnIndex] != null) {
            return;
        }            
        this.gameField[rowIndex][columnIndex] = this.CurrentPlayer;

        if (this.CurrentPlayer == 'x') {
            this.CurrentPlayer = "o";
        } else this.CurrentPlayer = 'x';



        //this.CurrentPlayer = (this.CurrentPlayer == "x") ? "o" : "x";

        
    }

    isFinished() {
        //should return true if game is finished (e.g. there is a winner or it is a draw)
        return this.isDraw() || !!this.getWinner();

        

            
    }
    //ready
    getWinner() {
        if (this.gameField[0][0] == "o" && this.gameField[0][1] == "o" && this.gameField[0][2] == 'o' ||
            this.gameField[1][0] == "o" && this.gameField[1][1] == "o" && this.gameField[1][2] == 'o' ||
            this.gameField[2][0] == "o" && this.gameField[2][1] == "o" && this.gameField[2][2] == 'o' ||
            this.gameField[0][0] == "o" && this.gameField[1][0] == "o" && this.gameField[2][0] == 'o' ||
            this.gameField[0][1] == "o" && this.gameField[1][1] == "o" && this.gameField[2][1] == 'o' ||
            this.gameField[0][2] == "o" && this.gameField[1][2] == "o" && this.gameField[2][2] == 'o' ||
            this.gameField[0][0] == "o" && this.gameField[1][1] == "o" && this.gameField[2][2] == 'o' ||
            this.gameField[0][2] == "o" && this.gameField[1][1] == "o" && this.gameField[2][0] == 'o') {
            return 'o';
        } else if ( this.gameField[0][0] == "x" && this.gameField[0][1] == "x" && this.gameField[0][2] == 'x' ||
                    this.gameField[1][0] == "x" && this.gameField[1][1] == "x" && this.gameField[1][2] == 'x' ||
                    this.gameField[2][0] == "x" && this.gameField[2][1] == "x" && this.gameField[2][2] == 'x' ||
                    this.gameField[0][0] == "x" && this.gameField[1][0] == "x" && this.gameField[2][0] == 'x' ||
                    this.gameField[0][1] == "x" && this.gameField[1][1] == "x" && this.gameField[2][1] == 'x' ||
                    this.gameField[0][2] == "x" && this.gameField[1][2] == "x" && this.gameField[2][2] == 'x' ||
                    this.gameField[0][0] == "x" && this.gameField[1][1] == "x" && this.gameField[2][2] == 'x' ||
                    this.gameField[0][2] == "x" && this.gameField[1][1] == "x" && this.gameField[2][0] == 'x') {
                        return 'x'
                    }  
        return null;

    }


    //ready
    noMoreTurns() {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (!this.gameField[i][j]) return false;
            }
        }
        return true;



        // this.gameField.includes(null) ? true : false;
        

    }

    //ready
    isDraw() {

        return this.noMoreTurns() && !this.getWinner();

        //should return true if there is no more turns and no winner (должен вернуть тру, если нет ходов и победителя) либо фолс

 /*        if (!this.gameField.flat().includes(null) && (getWinner() == "null")) {
            console.log(true);  
            console.log(this.gameField);
            return true;
        }  */
/*         if (this.gameField.flat().includes(null) || (getWinner() == "x") || (getWinner() == "o")) {
           console.log(false);
           console.log(this.gameField);
            return false;
        } */
        
        
        
        

        

       /* if (this.gameField.flat(1).includes(null) || this.getWinner) return false;
        return true;  */
        
        

        //TicTacToe #isDraw должен возвращать false, если игра не завершена или есть победитель, и true, если это ничья:

    }


    //ready
    getFieldValue(rowIndex, colIndex) {
        //should return `matrix[row][col]` value (if any) or `null`
        if ((rowIndex <= 2 && rowIndex >= 0) && (colIndex <= 2 && colIndex >= 0)) {
            return this.gameField[rowIndex][colIndex];
        }

        

    }
}

module.exports = TicTacToe;
