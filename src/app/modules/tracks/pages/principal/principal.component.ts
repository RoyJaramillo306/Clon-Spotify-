import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cancion } from '@core/modelos/canciones.model';

import { CancionService } from '@modules/tracks/services/cancion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, OnDestroy {

  public canciones: Cancion[] = [];
  public obser!: Subscription;

  constructor( private cancionService: CancionService ){}

  ngOnInit(): void {
    this.obser = this.cancionService.getCanciones()
                  .subscribe( resp => {
                    this.canciones = resp;
                  })
  }

  ngOnDestroy(): void {
      this.obser.unsubscribe();
  }

}
