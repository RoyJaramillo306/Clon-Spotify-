import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = environment.api;

  constructor( private http: HttpClient ){}

  enviarRegistro(datos:{}): Observable<any>{
    return this.http.post(`${this.url}/auth/login`,datos)
            .pipe(
              catchError( (err) => {
                const { status, statusText, url } = err;
                console.log('Estado: '+status+' - tipo: '+statusText+' - url: '+url);
                return of(status)
              })
            )
  }

  expirarSession(){
    setTimeout(() => {
      console.log('La sessión va a expirar');
      localStorage.removeItem("token");
    }, 1000*60*9);
  }

  session(token:string){
    if (token) {
      localStorage.setItem("token", token);
      this.expirarSession();
    }
  }

}
