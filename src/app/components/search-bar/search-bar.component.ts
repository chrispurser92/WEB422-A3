import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchQuery = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch(): void {
    console.log('Search query submitted:', this.searchTerm);
    this.searchQuery.emit(this.searchTerm);
  }
}
