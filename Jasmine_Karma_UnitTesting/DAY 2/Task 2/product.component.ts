import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public prod:any =  [  
    {prodno : 10,  pname : "Sales", loc : "Hyd"},
    {prodno : 20,  pname : "Tv", loc : "Pune"},
    {prodno : 30,  pname : "Fridge", loc : "Hyd"},
    {prodno : 40,  pname : "Wm", loc : "Pune"},
    {prodno : 50,  pname : "AC", loc : "Hyd"},
    ];
  
    public  removeProduct(dno: number)
    {
       var index =  this.prod.findIndex((x:any) => x.prodno == dno);
       this.prod.splice(index, 1);
    }



  constructor() { }

  ngOnInit(): void {
  }

}
