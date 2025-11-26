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
  gravity: number = 2;
  ground: number = 0;

  constructor() {
    this.positionY = window.innerHeight / 2;

    setInterval(() => {
      this.fall();
    }, 25);
  }

  fly() {
    this.positionY -= 150;
    if (this.positionY < 0) {
      this.positionY = 0;
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
}
