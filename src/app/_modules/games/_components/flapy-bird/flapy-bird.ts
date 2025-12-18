import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-flapy-bird',
  standalone: true,
  imports: [],
  templateUrl: './flapy-bird.html',
  styleUrl: './flapy-bird.css',
})
export class FlapyBird {
  positionY: number = 0;
  positionX: number = 0;

  gravity: number = 3;
  ground: number = 0;
  gameOver: boolean = false;

  obstacles: { x: number; y: number; width: number; height: number }[] = [];

  constructor() {
    this.positionX = window.innerWidth / 2;
    this.positionY = window.innerHeight / 2;

    this.obstacles.push({ x: window.innerWidth, y: 0, width: 60, height: 200 });

    this.obstacles.push({
      x: window.innerWidth,
      y: 300,
      width: 60,
      height: window.innerHeight - 300,
    });
    setInterval(() => {
      if (!this.gameOver) {
        this.fall();
        this.moveObstacles();
        this.checkCollision();
      }
    }, 25);
  }

  fly() {
    this.positionY -= 70;
    if (this.positionY < 100) {
      this.positionY = 100;
    }
  }

  fall() {
    this.positionY += this.gravity;

    this.ground = window.innerHeight - 50;
    if (this.positionY > this.ground) {
      this.positionY = this.ground;
    }
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.fly();
    }
  }

  @HostListener('window:click', ['$event'])
  handleLeftClick(event: MouseEvent) {
    this.fly();
  }
  moveObstacles() {
    this.obstacles.forEach((obstacle) => (obstacle.x -= 5));

    const lastObstacle = this.obstacles[this.obstacles.length - 1];

    // add new pipes when last reaches half screen
    if (lastObstacle.x <= window.innerWidth / 2) {
      const gap = 150;
      const topHeight = Math.random() * (window.innerHeight - gap - 150);

      this.obstacles.push({
        x: window.innerWidth,
        y: 0,
        width: 60,
        height: topHeight,
      });
      this.obstacles.push({
        x: window.innerWidth,
        y: topHeight + gap,
        width: 60,
        height: window.innerHeight - (topHeight + gap),
      }); // bottom pipe
    }

    // remove old pipes
    if (this.obstacles[0].x + this.obstacles[0].width < 0) {
      this.obstacles.shift();
      this.obstacles.shift();
    }
  }
  checkCollision() {
    const birdW = 10;
    const birdH = 10;

    const hit = this.obstacles.some(
      (obs) =>
        this.positionX < obs.x + obs.width &&
        this.positionX + birdW > obs.x &&
        this.positionY < obs.y + obs.height &&
        this.positionY + birdH > obs.y
    );

    if (hit) this.gameOver = true;
  }

  reset() {
    this.gameOver = false;
    this.positionX = window.innerHeight;
    this.obstacles = [
      { x: window.innerWidth, y: 0, width: 60, height: 200 },
      {
        x: window.innerWidth,
        y: 300,
        width: 60,
        height: window.innerHeight - 300,
      },
    ];
  }
}
