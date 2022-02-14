import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})

export class ReproductorComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  public obser!: Subscription

  constructor( public multimediaService: MultimediaService ){}

  ngOnInit(): void{
    this.multimediaService.icono = 'uil-play';
  }

  ngOnDestroy(): void {
    
  }

  posicionBarra(evento:any){
    const elem: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = evento;
    const { x, width } = elem.getBoundingClientRect();
    const clickX = clientX - x;
    const porcentajeX = (clickX*100)/width; 
    this.multimediaService.porcentajeCancion(porcentajeX);
  }

}
