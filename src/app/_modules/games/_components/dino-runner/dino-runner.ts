import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-dino-runner',
  imports: [],
  templateUrl: './dino-runner.html',
  styleUrl: './dino-runner.css'
})
export class DinoRunner {
  posisionY: number = 0;
  posisionx: number = 0;
  jumpHeight: number = 50
  ground: number = 400


  constructor(){
    this.posisionY = window.innerHeight  = this.ground;
    this.posisionx = window.innerWidth / 2
  }

  @HostListener('window:click', ["$event"])
    handleClick(event: MouseEvent){
      this.jump()
    }
  
  jump(){
    this.posisionY -= this.jumpHeight

    setTimeout(() => {
      this.posisionY = this.ground},
    2000)

  }

  
}
