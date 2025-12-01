import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-dino-runner',
  imports: [],
  templateUrl: './dino-runner.html',
  styleUrl: './dino-runner.css',
})
export class DinoRunner {
  positionY: number = 0;
  positionX: number = 0;
  jumpHeight: number = 160;
  ground: number = 400;
  obstaclesHeight: number = 0;
  gameOver: boolean = false;

  obstacles: { x: number; y: number; width: number; height: number }[] = [];

  constructor() {
    this.obstaclesHeight = Math.floor(Math.random() * 10);
        console.log(this.obstacles)

    this.positionY = this.ground;
    this.positionX = window.innerWidth / 2;
    this.obstacles.push({
      x: window.innerWidth,
      y: this.ground - this.obstaclesHeight,
      width: 10,
      height: 50 + this.obstaclesHeight,
    });

    setInterval(() => {
      this.moveObstacles();
      this.checkCollision();
    }, 10);
  }
  @HostListener('window:click', ['$event'])
  handleClick(event: MouseEvent) {
    this.jump();
  }

  jump() {
    this.positionY -= this.jumpHeight;
    setTimeout(() => {
      this.positionY = this.ground;
    }, 600);
  }

  moveObstacles() {
    this.obstaclesHeight = Math.floor(Math.random() * 10);

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
        // remove old pipes
    if (this.obstacles[0].x + this.obstacles[0].width < 0) {
      this.obstacles.shift();
    }
  }

 checkCollision() {
    const dinoW = 20;
    const dinoH = 20;

    const hit = this.obstacles.some(obs =>
      this.positionX < obs.x + obs.width &&
      this.positionX + dinoW > obs.x &&
      this.positionY < obs.y + obs.height &&
      this.positionY + dinoH > obs.y
    );

    if (hit) this.gameOver = true;
  }
}