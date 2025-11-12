import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  imports: [NgClass],
  templateUrl: './memory-game.html',
  styleUrl: './memory-game.css'
})
export class MemoryGame implements OnInit {
  items = ['🌸', '🌼', '🌺', '🌹', '🥀', '🌻', '🌷', '💐'];
  itemsForGame: { value: string; flipped: boolean; matched: boolean }[] = [];

  firstCard: any = null;
  secondCard: any = null;
  lockBoard = false;
  message : string = '';
  win: boolean = false;

  ngOnInit(): void {
    const doubleItems = [...this.items, ...this.items];
    this.itemsForGame = doubleItems
      .sort(() => Math.random() - 0.5)
      .map(value => ({ value, flipped: false, matched: false }));
  }

  select(card: any): void {
    if (this.lockBoard || card.flipped || card.matched) return;

    card.flipped = true;

    if (!this.firstCard) {
      this.firstCard = card;
    } else {
      this.secondCard = card;
      this.checkMatch();
    }
  }

  checkMatch(): void {
    if (this.firstCard.value === this.secondCard.value) {
      this.firstCard.matched = true;
      this.secondCard.matched = true;
      this.reset();
       if (this.itemsForGame.every(card => card.matched)) {
      this.message = ("🎉 You won the game!");
      this.win = !this.win
    }
    } else {
      this.lockBoard = true;
      setTimeout(() => {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.reset();
      }, 1000);
    }
  }

  reset(): void {
    this.firstCard = null;
    this.secondCard = null;
    this.lockBoard = false;
    this.win = false
  }
  resetGame(): void { 
    this.message = '';
    this.win = false; 
    this.firstCard = null;
    this.secondCard = null; 
    this.lockBoard = false; 
    this.ngOnInit(); 
    this.win = false
    }
}