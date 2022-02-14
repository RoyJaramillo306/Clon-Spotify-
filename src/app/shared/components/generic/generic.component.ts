import { Component, Input, OnInit } from '@angular/core';
import { Cancion } from '@core/modelos/canciones.model';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  @Input() titulo:string = '';
  @Input() modo: 'small' | 'big' = 'big';
  @Input() canciones: Cancion[] = [];

  constructor(){}

  ngOnInit(): void{
  }

  getModo(){
    return (this.modo === 'big') ? 'card-big' : 'card-small';
  }

}
