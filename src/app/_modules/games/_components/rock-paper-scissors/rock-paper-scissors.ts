import { Component } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  imports: [],
  templateUrl: './rock-paper-scissors.html',
  styleUrl: './rock-paper-scissors.css'
})
export class RockPaperScissors {
  items = ['rock✊', 'scissors✌', 'paper✋']


  computerChoice : string = '';
  yourChoice: string = '';
  computerScore : number = 0 ; 
  yourScore: number = 0 ; 
  winner: string = ''

  play(userChoice: string){
    if(this.yourScore < 3 && this.computerScore < 3){
    this.yourChoice = userChoice
    const random = Math.floor(Math.random() * this.items.length)
    this.computerChoice = this.items[random]

    switch( true ){
      case 
      userChoice === this.computerChoice:
      this.winner = ('Drow')

      break;
      case 
      userChoice === 'rock✊' && this.computerChoice == 'scissors✌' ||
      userChoice === 'scissors✌' && this.computerChoice == 'paper✋' ||
      userChoice === 'paper✋' && this.computerChoice == 'rock✊':
      this.winner = ('You');
      this.yourScore++
      break;

       default:
        this.winner = 'Computer';
        this.computerScore++
    }

  }
}
reset(){
  this.computerChoice = '';
  this.yourChoice = '';
  this.computerScore = 0 ; 
  this.yourScore = 0 ; 
  this.winner = '';
}

}
