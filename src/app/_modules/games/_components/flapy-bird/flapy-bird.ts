import { Component } from '@angular/core';

@Component({
  selector: 'app-flapy-bird',
  standalone: true,
  imports: [],
  templateUrl: './flapy-bird.html',
  styleUrl: './flapy-bird.css',
})
export class FlapyBird {
  positionY: number = 0;
  gravity: number = 2;

  constructor() {
    this.positionY = window.innerHeight / 2;

    setInterval(() => {
      this.fall();
    }, 30);
  }

  fly() {
    this.positionY -= 50;
    if (this.positionY < 0) {
      this.positionY = 0;
    }
  }

  fall() {
    this.positionY += this.gravity;

    const ground = window.innerHeight - 50;
    if (this.positionY > ground) {
      this.positionY = ground;
    }
  }
}
