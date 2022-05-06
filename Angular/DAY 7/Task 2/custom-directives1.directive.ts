import { Directive,Input, OnInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives1]'
})
export class CustomDirectives1Directive implements OnInit {

  @Input()
  appCustomDirectives1:string  = "";

  constructor(private _element: ElementRef) { }

  ngOnInit()
  {
    if(this.appCustomDirectives1 == "")
    {
       this.appCustomDirectives1 = "red";
    }

    this._element.nativeElement.style.color = this.appCustomDirectives1;
    //this._element.nativeElement.style.border = "1px solid gray";
  }


}
