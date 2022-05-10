import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmatic',
  templateUrl: './cosmatic.component.html',
  styleUrls: ['./cosmatic.component.css']
})
export class CosmaticComponent implements OnInit {


  productArr: Product[] = [
    { pid: 1, pname: "powder", price: 100, category: "small", qty: 4 },
    { pid: 2, pname: "kajal", price: 200, category: "medium", qty: 2 },
    
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