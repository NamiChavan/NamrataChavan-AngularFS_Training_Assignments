import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent implements OnInit {

  productArr: Product[] = [
    { pid: 1, pname: "bangles", price: 500, category: "jewellery", qty: 4 },
    { pid: 2, pname: "neckles", price: 1000, category: "jewellery", qty: 2 },
    { pid: 2, pname: "ring", price: 500, category: "jewellery", qty: 2 },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

class Product

{

    pid:number=0;

    pname:string="";

    price:number=0;

    category:string="";

    qty:number=0;

    

}