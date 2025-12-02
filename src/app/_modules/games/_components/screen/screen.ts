import { Component, Input } from '@angular/core';
import { DinoRunner } from '../dino-runner/dino-runner';
import { MemoryGame } from '../memory-game/memory-game';
import { RockPaperScissors } from '../rock-paper-scissors/rock-paper-scissors';
import { FlapyBird } from '../flapy-bird/flapy-bird';
import { GuessTheNumber } from '../guess-the-number/guess-the-number';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-screen',
  imports: [NgComponentOutlet],
  templateUrl: './screen.html',
  styleUrl: './screen.css'
})
export class Screen {
  @Input() game: string | null = null;

  gameMap: Record<string, any> = {
    '/rock-paper-scissors': RockPaperScissors,
    '/memory-game': MemoryGame,
    '/flappy-bird': FlapyBird,
    '/dino-runner': DinoRunner,
    '/guess-the-number': GuessTheNumber
  };
}