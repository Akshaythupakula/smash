import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LaysComponent } from './lays/lays.component';

export const routes: Routes = [
    { path: 'game', component: GameComponent },
    {path:'',component:LaysComponent}
];
