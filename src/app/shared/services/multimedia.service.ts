import { Injectable } from '@angular/core';
import { Cancion } from '@core/modelos/canciones.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  public audio!: HTMLAudioElement;
  public cancionInfo: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public tiempoTranscurrido: BehaviorSubject<string> = new BehaviorSubject<string>('00:00');
  public tiempoRestante: BehaviorSubject<string> = new BehaviorSubject<string>('-00:00');
  public play: BehaviorSubject<string> = new BehaviorSubject<string>('paused');
  public barra: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public icono: string = 'uil-pause';

  constructor(){
    this.audio = new Audio()
    this.cancionInfo.subscribe(resp => {
      if (resp) {
        this.icono = 'uil-pause';
        this.setAudio(resp);
      }
    })
    this.barraEstado();
  }

  private barraEstado(){
    this.audio.addEventListener('timeupdate', this.calcularTiempo, false);
    this.audio.addEventListener('playing', this.reproductorEstado, false);
    this.audio.addEventListener('pause', this.reproductorEstado, false);
    this.audio.addEventListener('play', this.reproductorEstado, false);
    this.audio.addEventListener('ended', this.reproductorEstado, false);
  }

  private reproductorEstado = (estado:any) => {
    switch(estado.type){
      case 'play':
        this.play.next('play');
        break
      case 'playing':
        this.play.next('playing');
        break
      case 'ended':
        this.play.next('ended');
        break  
      default:
        this.play.next('paused');
    }
  }
  
  public reproductorMetodos(){
    //(this.audio.paused) ? this.audio.play() : this.audio.pause();
    if (this.audio.paused) {
      this.audio.play();
      this.icono = 'uil-pause';
    } else{
      this.audio.pause();
      this.icono = 'uil-play';
    }
  }

  private barraProgreso(actual:number, duracion:number){
    let porcentaje = (actual*100)/duracion;
    this.barra.next(porcentaje);
  }

  private calcularTiempo = () => {
    const { duration, currentTime } = this.audio;
    this.calcularTiempoTranscurrido(currentTime);
    this.calcularTiempoRestante(currentTime, duration);
    this.barraProgreso(currentTime, duration);
  }

  private calcularTiempoTranscurrido(actual:number){

    let segundo = Math.floor(actual%60);
    let minuto = Math.floor((actual/60)%60); 

    const segundoTranscurrido = (segundo<10) ? `0${segundo}` : segundo;
    const minutoTranscurrido = (minuto<10) ? `0${minuto}` : minuto;

    const tiempoFormato = `${minutoTranscurrido}:${segundoTranscurrido}`;

    this.tiempoTranscurrido.next(tiempoFormato);

  }

  private calcularTiempoRestante(actual:number, duracion:number){

    let restante = duracion - actual 
    let segundo = Math.floor(restante%60);
    let minuto = Math.floor((restante/60)%60); 

    const segundoTranscurrido = (segundo<10) ? `0${segundo}` : segundo;
    const minutoTranscurrido = (minuto<10) ? `0${minuto}` : minuto;

    const tiempoFormato = `- ${minutoTranscurrido}:${segundoTranscurrido}`;

    this.tiempoRestante.next(tiempoFormato);

  }

  public setAudio(cancion: Cancion): void{
    this.audio.src = cancion.url
    this.audio.play()
  }

  public porcentajeCancion(porcentaje:number){
    const { duration } = this.audio
    const porcentCancion = (porcentaje*duration)/100;
    this.audio.currentTime = porcentCancion;
  }

}
