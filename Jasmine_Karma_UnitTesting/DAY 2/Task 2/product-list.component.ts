import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input()  prodObj:any = {};
  @Output() onDeptRemoved = new EventEmitter<number>();

 public remove(dno: number)
 {
 // event emitting
   this.onDeptRemoved.emit(dno);
 }

}
