import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cancion } from '@core/modelos/canciones.model';
import { environment } from '../../../../environments/environment.prod';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CancionService {

  private readonly url = environment.api;

  constructor( private http: HttpClient ){
    
  }

  getCanciones(){
    return this.http.get<Cancion[]>(`${this.url}/tracks`)
            .pipe(
              map( ({data}:any) => {
                return data;
              })
            )
  }

}
