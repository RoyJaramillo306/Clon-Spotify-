import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { PrincipalComponent } from '@modules/home/pages/principal/principal.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule ) },
  { 
    path: '', 
    component: PrincipalComponent, loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule ),
    canActivate:[SessionGuard]
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
