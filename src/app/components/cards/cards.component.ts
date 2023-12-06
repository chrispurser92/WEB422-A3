import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GameService } from './game.service';
import { Game } from './game.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnChanges{
  @Input() games: Game[] = [];
  @Input() searchQuery: string = '';
  filteredGames: Game[] = [];
  

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    console.log('CardsComponent initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Onchanges Function')
    if ((changes as any).games || (changes as any).searchQuery) {
      // Update filteredGames when games input changes
      this.filteredGames = this.games;
      this.filterCards();
    }
  }
  filterCards(): void {
    console.log('Filtering cards with query:', this.searchQuery);
    if (this.searchQuery.trim() !== '') {
      this.filteredGames = this.games.filter(game =>
        game.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredGames = this.games;
    }
  }
} 
