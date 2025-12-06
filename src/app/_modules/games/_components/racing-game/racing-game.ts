import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-racing-game',
  imports: [],
  templateUrl: './racing-game.html',
  styleUrl: './racing-game.css',
})
export class RacingGame {
  positionY: number;
  positionX: number;
  borderX: number;
  borderY: number;
  private activeKeys: Set<string> = new Set();
  private intervalId: number;

  constructor() {
    this.positionX = window.innerWidth / 3;
    this.positionY = window.innerHeight / 3;
    this.borderX = window.innerWidth;
    this.borderY = window.innerHeight;

    this.intervalId = window.setInterval(() => {
      if (
        this.activeKeys.has('ArrowDown') &&
        this.positionY < this.borderY - 238
      ) {
        this.positionY += 2;
      }
      if (this.activeKeys.has('ArrowUp') && this.positionY > 0) {
        this.positionY -= 2;
      }
      if (this.activeKeys.has('ArrowLeft') && this.positionX > 0) {
        this.positionX -= 2;
      }
      if (
        this.activeKeys.has('ArrowRight') &&
        this.positionX < this.borderX - 250
      ) {
        this.positionX += 2;
      }
    }, 10);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.activeKeys.add(event.code);
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    this.activeKeys.delete(event.code);
  }
}
