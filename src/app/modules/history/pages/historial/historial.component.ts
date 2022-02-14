import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cancion } from '@core/modelos/canciones.model';
import { BuscarService } from '@modules/history/services/buscar.service';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit, OnDestroy {

  public canciones: Observable<any> = of([]);
  public obser!: Subscription;

  constructor( private buscarService: BuscarService ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  dataRecibida(termino:string){
    this.canciones = this.buscarService.obtenerCanciones(termino);
  }

}
