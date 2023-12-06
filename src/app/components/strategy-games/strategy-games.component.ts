import { Component, OnInit } from '@angular/core';
import { GameService } from '../cards/game.service';
import { Game } from '../cards/game.interface';

@Component({
  selector: 'app-strategy-games',
  templateUrl: './strategy-games.component.html',
  styleUrls: ['./strategy-games.component.css']
})
export class StrategyGamesComponent {
  strategyGames: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGamesByGenre('Strategy').subscribe((games) => {
      this.strategyGames = games;
    });
  }
}
