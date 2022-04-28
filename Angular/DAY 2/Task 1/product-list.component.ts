import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

   @Input()
   category:string="";

   Filteredproducts: Product[]=[];

  ProductObj:Product[] = [
    {pid : 10, ProductName : "p1",  price :1000 ,category : "Category1",qty :10},
    {pid : 20, ProductName : "p2",  price :2000 ,category : "Category2",qty :10} ,
    {pid : 30, ProductName : "p3",  price :3000 ,category : "Category3",qty :10} ,
    {pid : 40, ProductName : "p4",  price :4000 ,category : "Category4",qty :10} ,
    
  ];

  ngOnInit(): void {

    alert(this.category);
    this.Filteredproducts=this.ProductObj.filter(x=>x.category==this.category)
  }
}







class Product

{
    pid:number=0;

   ProductName:string="";

    price:number=0;

    category:string="";

    qty:number=0;

    

}
