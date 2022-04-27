import { Component, OnInit } from '@angular/core';
//import { Product } from './Model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  productArr: Product[] = [
    { pid: 1, pname: "Samsung", price: 100, category: "small", qty: 4 },
    { pid: 2, pname: "LG", price: 200, category: "medium", qty: 2 },
    { pid: 3, pname: "Toshiba", price: 300, category: "big", qty: 4 },
    { pid: 4, pname: "Onida", price: 400, category: "small", qty: 6 },
    { pid: 5, pname: "Sony", price: 500, category: "big", qty: 8 },
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