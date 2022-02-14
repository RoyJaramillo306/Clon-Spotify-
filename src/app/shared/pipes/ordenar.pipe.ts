import { Pipe, PipeTransform } from '@angular/core';
import { Cancion } from '@core/modelos/canciones.model';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( canciones: Cancion[], condicion: string = 'sin valor', estado: boolean): Cancion[] {
    
    if (!estado) {
      
      switch (condicion) {
        case 'name':
          return canciones.sort( (a,b) => (a.name > b.name) ? 1 : -1 );
        case 'album':
          return canciones.sort( (a,b) => (a.album > b.album) ? 1 : -1 );
        default:
          return canciones;
      }

    } else {

      switch (condicion) {
        case 'name':
          return canciones.sort( (a,b) => (a.name > b.name) ? 1 : -1 ).reverse();
        case 'album':
          return canciones.sort( (a,b) => (a.album > b.album) ? 1 : -1 ).reverse();
        default:
          return canciones.reverse();
      }

    }

  }

}
