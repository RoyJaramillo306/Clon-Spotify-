import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HistoryRoutingModule } from './history-routing.module';
import { SharedModule } from '@shared/shared.module';

import { HistorialComponent } from './pages/historial/historial.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    HistorialComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HistoryModule { }
