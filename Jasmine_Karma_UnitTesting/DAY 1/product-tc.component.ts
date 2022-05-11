import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tc',
  templateUrl: './product-tc.component.html',
  styleUrls: ['./product-tc.component.css']
})
export class ProductTCComponent implements OnInit {

  username:string="";
  price:string="";
  quantity:string="1";
  result:any="";
  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit() {
     
    alert(this.result= parseInt(this.price)*parseInt(this.quantity))
   
  
 }


}
