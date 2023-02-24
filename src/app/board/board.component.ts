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

    } else {

      alert("Square already played by " + this.squares[i]);

    }
  }

  calculateWinner(){

    // horizontal
    if(this.squares[0] == this.squares[1] && this.squares[0] == this.squares[2]){
      return this.squares[0];
    }

    
    if(this.squares[3] == this.squares[4] && this.squares[3] == this.squares[5]){
      return this.squares[3];
    }

    
    if(this.squares[6] == this.squares[7] && this.squares[6] == this.squares[8]){
      return this.squares[6];
    }

    // vertical
    if(this.squares[0] == this.squares[3] && this.squares[0] == this.squares[6]){
      return this.squares[0];
    }
    
    if(this.squares[1] == this.squares[4] && this.squares[1] == this.squares[7]){
      return this.squares[1];
    }
    
    if(this.squares[2] == this.squares[5] && this.squares[2] == this.squares[8]){
      return this.squares[2];
    }

    // Digonal
    if(this.squares[0] == this.squares[4] && this.squares[0] == this.squares[8]){
      return this.squares[0];
    }

    if(this.squares[2] == this.squares[4] && this.squares[2] == this.squares[6]){
      return this.squares[2];
    }

    return '';
  }

}