import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cancion } from '@core/modelos/canciones.model';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  private readonly url = environment.api;

  constructor( private http: HttpClient ){}

  obtenerCanciones(termino:string){
    return this.http.get<Cancion[]>(`${this.url}/tracks`)
            .pipe(
              map( ({data}:any) => {
                return data;
              })
            )
  }

}
