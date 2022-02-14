import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public buscador: string = '';

  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor(){
  }

  ngOnInit(): void {
  }

  obtenerBusqueda(termino:string){
    this.data.emit(termino); 
  }

}
