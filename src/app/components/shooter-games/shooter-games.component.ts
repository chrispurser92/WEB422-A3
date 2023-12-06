import { Component, OnInit } from '@angular/core';
import { GameService } from '../cards/game.service';
import { Game } from '../cards/game.interface';

@Component({
  selector: 'app-shooter-games',
  templateUrl: './shooter-games.component.html',
  styleUrls: ['./shooter-games.component.css'],
})
export class ShooterGamesComponent implements OnInit {
  shooterGames: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGamesByGenre('Shooter').subscribe((games) => {
      this.shooterGames = games;
    });
  }
}
