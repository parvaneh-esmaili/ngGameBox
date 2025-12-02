import { Component } from '@angular/core';
import { GameCard } from "../../_cards/game-card/game-card";
import { Router } from '@angular/router';
import { Screen } from "../../_components/screen/screen";

@Component({
  selector: 'app-home',
  imports: [GameCard, Screen],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

  games = [
    { title:'Rock Paper Scissors ✊✋✌', description: 'Choose rock, paper, or scissors and beat the computer!', route: '/rock-paper-scissors'  },
    { title: 'Memory Game 🧠🃏🔄',description: 'Flip the cards and match the pairs to test your memory skills!', route: '/memory-game' },
    { title: 'Flappy Bird',description: '...', route: '/flappy-bird' },
    { title: 'Dino Runner',description: '...', route: '/dino-runner' },
    { title: 'Guess The Number 🔢',description: 'Try to guess the number the computer is thinking of', route: '/guess-the-number' },
  ]

 constructor(private router: Router) {}
 selectedGame: string | null = null;

  navigateToGame(game: string) {
    this.selectedGame = game;
  }
}
