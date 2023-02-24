import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{

  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor(){
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = "";
  }
  
  ngOnInit(){
    this.newGame();
  }
  
  newGame(){
    this.squares = Array(9).fill('');
    this.xIsNext = true;
    this.winner = "";
  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  playMove(i: number){
    
    if(this.squares[i] == '') {

      this.squares[i] = this.player;
      this.xIsNext = !this.xIsNext;

      this.winner = this.calculateWinner();

      console.log(this.winner)

    } else {

      alert("Square already played by " + this.squares[i]);

    }
  }

  calculateWinner(){

    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < wins.length; i++) {
      
      if(this.squares[wins[i][0]] == this.squares[wins[i][1]] && this.squares[wins[i][0]] == this.squares[wins[i][2]]){
        return this.squares[wins[i][0]];
      }
      
    }

    return '';
  }

}