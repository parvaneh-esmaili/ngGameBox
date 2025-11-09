import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [FormsModule],
    templateUrl: './guess-the-number.html',
  styleUrl: './guess-the-number.css'
})
export class GuessTheNumber implements OnInit {

  mainNumber: number = 0;
  userNumber: number = 0;
  userChoices: number[] = [];
  lastChoice: number = 0;
  message : string = ''
  winner: string = '';
  try: number = 5;



  ngOnInit(): void {
    this.mainNumber = Math.floor(Math.random() *100)
      console.log(this.mainNumber)}
      guessNumber(userNumber: number): void {
        if (userNumber < 0 || userNumber > 100) {
        this.message = "Please enter a number between 0 and 100.";
    return;
  }

  if (this.try <= 0) {
    this.message = "No remaining attempts. Please restart the game.";
    return;
  }

  if (userNumber > this.mainNumber) {
    this.message = "The number is smaller than";
  } else if (userNumber < this.mainNumber) {
    this.message = "The number is bigger than";
  } else {
    this.winner = "🎉 You won the game!";
    this.message = "";
    return;
  }

  this.try--;
  this.userChoices.push(userNumber)
  this.lastChoice = this.userChoices[this.userChoices.length-1]
}


reset() {
  this.userNumber = 0;
  this.message = '';
  this.winner = '';
  this.try = 5;
  this.userChoices = [];
  this.lastChoice = 0;
  this.mainNumber = Math.floor(Math.random() * 100);
  console.log(this.mainNumber)
}

}
