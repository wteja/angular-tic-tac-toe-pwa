import { Component, OnInit } from '@angular/core';
import { SlotValueType } from '../types/slot-value';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: SlotValueType[] = [];
  xIsNext: boolean = true;
  winner: SlotValueType = null;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
  }

  get player(): SlotValueType {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares[idx] = this.player;
      this.xIsNext = !this.xIsNext;

      this.winner = this.calculateWinner();
    }
  }

  calculateWinner(): SlotValueType {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0, n = lines.length; i < n; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[b] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }
}
