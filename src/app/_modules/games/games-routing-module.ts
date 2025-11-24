import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './_pages/home/home';
import { RockPaperScissors } from './_components/rock-paper-scissors/rock-paper-scissors';
import { Games } from './games';
import { GuessTheNumber } from './_components/guess-the-number/guess-the-number';
import { MemoryGame } from './_components/memory-game/memory-game';
import { FlapyBird } from './_components/flapy-bird/flapy-bird';

const routes: Routes = [
  {path: '', component: Games, children:[
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'rock-paper-scissors', component:  RockPaperScissors },
    { path: 'guess-the-number', component:  GuessTheNumber },
    { path: 'memory-game', component: MemoryGame},
    { path: 'flappy-bird', component: FlapyBird}

  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
