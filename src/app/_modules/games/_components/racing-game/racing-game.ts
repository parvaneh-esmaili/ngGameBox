import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-racing-game',
  imports: [],
  templateUrl: './racing-game.html',
  styleUrl: './racing-game.css',
  standalone: true
})
export class RacingGame {
  positionY: number;
  positionX: number;
  borderX: number;
  borderY: number;
  activeKeys: Set<string> = new Set();
  intervalId: number;
  obstacles: { x: number; y: number; width: number; height: number }[] = [];
  y: number = 0



  constructor() {
    this.positionX = window.innerWidth / 3;
    this.positionY = window.innerHeight / 3;
    this.borderX = window.innerWidth;
    this.borderY = window.innerHeight;

    this.obstacles.push({
      x: window.innerWidth,
      y: Math.floor((Math.random() * window.innerHeight) / 3),
      width: 60,
      height: this.y += 60,
    });

    console.log(this.obstacles);

    this.intervalId = window.setInterval(() => {
      if (
        this.activeKeys.has('ArrowDown') &&
        this.positionY < this.borderY - 320
      ) {
        this.positionY += 2;
      }
      if (this.activeKeys.has('ArrowUp') && this.positionY > 0) {
        this.positionY -= 2;
      }
      if (this.activeKeys.has('ArrowLeft') && this.positionX > 0) {
        this.positionX -= 3;
      }
      if (
        this.activeKeys.has('ArrowRight') &&
        this.positionX < this.borderX - 250
      ) {
        this.positionX += 3;
      }
      this.moveObstacles();
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
  moveObstacles() {
    this.obstacles.forEach((obstacle) => (obstacle.x -= 2));

    const lastObstacle = this.obstacles[this.obstacles.length - 1];
    if (lastObstacle.x <= window.innerWidth / 1.5) {
     this.obstacles.push({
      x: window.innerWidth,
      y: Math.floor((Math.random() * window.innerHeight) / 3),
      width: 160,
      height:  100,
    });
    }
    if (this.obstacles[0].x + this.obstacles[0].width <= 0) {
      this.obstacles.shift();
    }
  }
}
