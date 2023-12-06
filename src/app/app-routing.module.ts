import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShooterGamesComponent } from './components/shooter-games/shooter-games.component';
import { CardGamesComponent } from './components/card-games/card-games.component';
import { StrategyGamesComponent } from './components/strategy-games/strategy-games.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shooter-games', component: ShooterGamesComponent },
  { path: 'card-games', component: CardGamesComponent },
  { path: 'strategy-games', component: StrategyGamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
