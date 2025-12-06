import { Component } from '@angular/core';
import { GameCard } from "../../_cards/game-card/game-card";
import { Router } from '@angular/router';
import { GameModel } from '../../../../_models/game.model';
import { GameService } from '../../../../_services/game';
@Component({
  selector: 'app-home',
  imports: [GameCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  games;

  constructor(private gameService: GameService, private router: Router){
    this.games = this.gameService.games
  }
    navigateToGame(route: string) {
    this.router.navigate([route]);
  }
}
