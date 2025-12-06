import { Injectable, signal } from '@angular/core';
import { GameModel } from '../_models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  games = signal<GameModel[]>([
    {
      title: 'Rock Paper Scissors ✊✋✌',
      description: 'Choose rock, paper, or scissors and beat the computer!',
      route: '/rock-paper-scissors',
    },
    {
      title: 'Memory Game 🧠🃏🔄',
      description:
        'Flip the cards and match the pairs to test your memory skills!',
      route: '/memory-game',
    },
    {
      title: 'Flappy Bird 🐦',
      description: 'Tap to keep the bird flying and avoid the pipes!',
      route: '/flappy-bird',
    },
    {
      title: 'Dino Runner 🦖',
      description:
        'Run endlessly, jump over obstacles, and survive as long as you can!',
      route: '/dino-runner',
    },
    {
      title: 'Guess The Number 🔢',
      description: 'Try to guess the number the computer is thinking of',
      route: '/guess-the-number',
    },
    {
      title: 'Racing Game 🚗💨',
      description:
        'Race against time, dodge obstacles, and reach the finish line!',
      route: '/racing',
    },
  ]);

  selectedGame = signal<GameModel | null>(null);

  selectGame(route: string) {
    const game = this.games().find((g) => g.route === route) || null;
    this.selectedGame.set(game);
  }
}
