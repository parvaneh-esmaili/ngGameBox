import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-dino-runner',
  imports: [],
  templateUrl: './dino-runner.html',
  styleUrl: './dino-runner.css',
})
export class DinoRunner {
  posisionY: number = 0;
  posisionx: number = 0;
  jumpHeight: number = 80;
  ground: number = 400;
  obstaclesHeight: number = 0;

  obstacles: { x: number; y: number; width: number; height: number }[] = [];

  constructor() {
    this.obstaclesHeight = Math.floor(Math.random() * 10);
    this.posisionY = window.innerHeight = this.ground;
    this.posisionx = window.innerWidth / 2;
    this.obstacles.push({
      x: window.innerWidth,
      y: this.ground - this.obstaclesHeight,
      width: 10,
      height: 50 + this.obstaclesHeight,
    });

    setInterval(() => {
      this.moveObstacles();
    }, 10);
  }
  @HostListener('window:click', ['$event'])
  handleClick(event: MouseEvent) {
    this.jump();
  }

  jump() {
    this.posisionY -= this.jumpHeight;

    setTimeout(() => {
      this.posisionY = this.ground;
    }, 500);
  }

  moveObstacles() {
    this.obstaclesHeight = Math.floor(Math.random() * 100);

    this.obstacles.forEach((obstacle) => {
      obstacle.x -= 2;
    });
    const lastObstacle = this.obstacles[this.obstacles.length - 1];

    if (lastObstacle.x <= window.innerWidth / 2) {
      this.obstacles.push({
        x: window.innerWidth,
        y: this.ground - this.obstaclesHeight,
        width: 10,
        height: 50 + this.obstaclesHeight,
      });
    }
  }
}
