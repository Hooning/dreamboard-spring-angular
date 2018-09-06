import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})


export class DropdownDirective implements OnInit{
  //@Input() openState: boolean = false;
  //@Input() _elementClass: String[] = [];

  @HostBinding('class.open') isOpen = false;
  // get elementClass(): string {
  //   return this._elementClass.join(' ');
  // }

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  //
  // }

  constructor(){}

  ngOnInit() {

  }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;

    // [Difficult way]
    // if ( !this.openState ){
    //   this._elementClass.push('open');
    //   this.elementRef.nativeElement.class = this._elementClass;
    //   this.openState = true;
    // }else{
    //   this._elementClass.pop();
    //   this.elementRef.nativeElement.class = this._elementClass;
    //   this.openState = false;
    // }
  }

}
