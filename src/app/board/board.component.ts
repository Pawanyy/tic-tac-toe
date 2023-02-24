import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  canPlay: boolean;
  winner: string;
  totalWinsX: number;
  totalWinsO: number;
  totalDraws: number;
  noOfMoves: number;

  constructor() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.canPlay = true;
    this.winner = '';
    this.totalWinsX = 0;
    this.totalWinsO = 0;
    this.totalDraws = 0;
    this.noOfMoves = 0;
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill('');
    this.xIsNext = true;
    this.canPlay = true;
    this.winner = '';
    this.noOfMoves = 0;
  }
  
  Reset() {
    this.totalWinsO = 0;
    this.totalWinsX = 0;
    this.totalDraws = 0;
    this.newGame();
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  playMove(i: number) {

    if(!this.canPlay){
      return;
    }

    if (this.squares[i] == '') {
      this.squares[i] = this.player;
      this.xIsNext = !this.xIsNext;

      this.noOfMoves++;

      this.winner = this.calculateWinner();

      console.log(this.winner);
    } else {
      alert('Square already played by ' + this.squares[i]);
    }

    if(this.winner != '' && this.canPlay){
      (this.winner == 'X') ? this.totalWinsX++ : this.totalWinsO++;
      this.canPlay = false;
    }

  }

  calculateWinner() {
    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < wins.length; i++) {
      if (
        this.squares[wins[i][0]] == this.squares[wins[i][1]] &&
        this.squares[wins[i][0]] == this.squares[wins[i][2]]
      ) {
        return this.squares[wins[i][0]];
      }
    }

    return '';
  }
}
