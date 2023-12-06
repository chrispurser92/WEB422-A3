import { Component, OnInit } from '@angular/core';
import { GameService } from '../cards/game.service';
import { Game } from '../cards/game.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  searchTerm: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
      console.log('Games data:', data);
      this.games = data;
    });
  }

  handleSearchQuery(query: string): void {
    // You can directly use the query here or pass it to another function
    // For now, let's update games based on the query directly
    this.updateGames(query);
  }

  updateGames(searchTerm: string): void {
    // Implement your logic to update games based on the search term
    // For now, let's assume games are updated directly using the searchTerm
    this.games = []; // Update this line with your actual logic
  }
  
}
