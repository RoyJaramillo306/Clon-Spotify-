import { Component, Input, OnInit } from '@angular/core';
import { Cancion } from '@core/modelos/canciones.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() modo: 'small' | 'big' = 'small';
  @Input() cancion!: Cancion

  constructor( private multimediaService: MultimediaService ){}

  ngOnInit(): void {
  }

  enviarCancion(cancion:Cancion): void{
    this.multimediaService.cancionInfo.next(cancion);
  }

}
