import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'canciones', loadChildren: () => import('@modules/tracks/tracks.module').then( m => m.TracksModule ) },
  { path: 'favoritos', loadChildren: () => import('@modules/favorites/favorites.module').then( m => m.FavoritesModule ) },
  { path: 'historial', loadChildren: () => import('@modules/history/history.module').then( m => m.HistoryModule ) },
  { path: '', redirectTo: 'canciones' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
