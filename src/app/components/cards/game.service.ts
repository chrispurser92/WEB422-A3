import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './game.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', '5a91b6034emsh71f2e829c267af1p1969f6jsn652bc6e9aa84')
      .set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com');

    return this.http.get<Game[]>(this.apiUrl, { headers });
  }

  getGamesByGenre(genre: string): Observable<Game[]> {
    // Assuming the 'genre' property is available in the Game interface
    return this.getGames().pipe(
      map((games) => games.filter((game) => game.genre === genre))
    );
  }
}
