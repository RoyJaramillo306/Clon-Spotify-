import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericComponent } from './components/generic/generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { ImgFailDirective } from './directivas/img-fail.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    ReproductorComponent,
    HeaderComponent,
    CardPlayerComponent,
    GenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrdenarPipe,
    ImgFailDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ReproductorComponent,
    HeaderComponent,
    CardPlayerComponent,
    GenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrdenarPipe,
    ImgFailDirective
  ]
})

export class SharedModule { }
