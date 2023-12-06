import { Component, OnInit } from '@angular/core';
import { GameService } from '../cards/game.service';
import { Game } from '../cards/game.interface';

@Component({
  selector: 'app-card-games',
  templateUrl: './card-games.component.html',
  styleUrls: ['./card-games.component.css']
})
export class CardGamesComponent {
  cardGames: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGamesByGenre('Card').subscribe((games) => {
      this.cardGames = games;
    });
  }
}
