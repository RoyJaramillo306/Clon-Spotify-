import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[imgfail]'
})
export class ImgFailDirective {

 

  @HostListener('error') excepcion():void{
    const nativo = this.el.nativeElement;
    nativo.src = '../../../assets/images/imgFail.jpg';
  } 

  constructor( private el: ElementRef ){
    
  }

}
