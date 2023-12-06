import { Component } from '@angular/core';
import { Game } from './components/cards/game.interface';
import { GameService } from './components/cards/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games: Game[] = [];
  searchQuery: string = '';
  filteredGames: Game[] = [];
  
  constructor(private gameService: GameService) {}
  
  ngOnInit(): void {
    // Fetch games from the API when the component initializes
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
      // Initialize filteredGames with all games
      this.filteredGames = this.games;
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    console.log('Search query:', query);
    this.updateFilteredGames(query);
  }

  updateFilteredGames(searchQuery: string): void {
    this.filteredGames = this.games.filter(game =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}
