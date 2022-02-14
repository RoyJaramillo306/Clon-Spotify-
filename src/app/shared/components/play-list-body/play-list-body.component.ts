import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Cancion } from '@core/modelos/canciones.model';
import { CancionService } from '@modules/tracks/services/cancion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit, OnDestroy {

  @Input() canciones: Cancion[] = [];
  @Input() proovedor!: string;
  public condicion: string = 'sin valor';
  public estado!: boolean;
  public contadorNombre: number = 0;
  public contadorAlbum: number = 0;
  public obser!: Subscription;

  constructor( private cancionService: CancionService ){}

  ngOnInit(): void{
    this.obser = this.cancionService.getCanciones()
                  .subscribe( resp => {
                    if (!this.proovedor) {
                      this.canciones = resp;
                    }
                  })
  }

  ngOnDestroy(): void {
      this.obser.unsubscribe();
  }

  ordenar(valor:string){

    if (valor === 'name') {
      this.contadorNombre++;
      if (this.contadorNombre%2 == 0) {
        this.estado = true;
        this.condicion = valor;
      } else{
        this.estado = false;
        this.condicion = valor;
      }
    }

    if (valor === 'album') {
      this.contadorAlbum++;
      if (this.contadorAlbum%2 == 0) {
        this.estado = true;
        this.condicion = valor;
      } else{
        this.estado = false;
        this.condicion = valor;
      }
    }

  }

}
