import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonCardBorderColor]'
})
export class BorderColorDirective {
  private initialColor:string ="#f5f5f5";
  private defaultColor:string ="#009688";
  private defaultHeight: number =180;

  constructor(private el:ElementRef) {
    this.setBorderColor(this.initialColor);
    this.setBorderHeight(this.defaultHeight);
  }

  @Input('pokemonCardBorderColor') borderColor:string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorderColor(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorderColor(this.initialColor);
  }

  setBorderColor(color:string){
    this.el.nativeElement.style.border=`solid 4px ${color}`;
  }

  setBorderHeight(height: number): void {
  this.el.nativeElement.style.height = height + 'px';
}
}
