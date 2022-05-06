import { Directive,Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives2]'
})
export class CustomDirectives2Directive implements OnChanges {


  @Input()
  appCustomDirectives2: string = "";

  adminNames:string[]=["Scott","Smith","Robert"]

   constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }

  ngOnChanges() {

    if(this.adminNames.includes(this.appCustomDirectives2))
    {
        // show ---  add the dom element
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
      // hide---  removes the dom element
      this.viewContainer.clear();
    }
  }
}
