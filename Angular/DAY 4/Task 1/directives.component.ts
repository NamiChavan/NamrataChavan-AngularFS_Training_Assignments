import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayMode:string  = "";

  public  ProductsArray:any[] = [
      {ProId  :  1,ProductName  :  "LG",Cateogory:"TV", Image:"https://5.imimg.com/data5/FM/HI/DG/SELLER-65327020/propre-led-tv-500x500.jpg", Price:20000},
      {ProId  :  2,ProductName  :  "IFB",Cateogory:"WM", Image:"https://www.lg.com/in/images/washing-machines/md07514753/gallery/FHM1065ZDL-Washing-Machines-Front-View-D-01.jpg", Price:30000},
      {ProId  :  3,ProductName  :  "LG",Cateogory:"AC", Image:"https://cdn.shopify.com/s/files/1/0414/1357/4809/products/1.2_gallery01_d2b9c1dd-2fd4-46de-b939-3ea138f5deb7_2048x2048.png?v=1642853303", Price:50000},
      {ProId  :  4,ProductName  :  "Whirlpool",Cateogory:"Fridge", Image:"https://www.reliancedigital.in/medias/LG-GL-S292RPZY-Refrigerators-491666528-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODU4fGltYWdlL2pwZWd8aW1hZ2VzL2hjYy9oNmEvOTMzOTkzODk2MzQ4Ni5qcGd8MjAxODIyODI5YzUxNTUyMmQxNjEwZjAxMmEwOGM0ZGY4ZjE3ZjA5YmRiMTA4NTJkZTJlZTIyYTc5YTBlY2YxYw", Price:40000},
      {ProId  :  5,ProductName  :  "Samsung",Cateogory:"Oven", Image:"https://m.media-amazon.com/images/I/618O0ywM1SL._SL1000_.jpg", Price:60000},
      
     ];


  constructor() { }

  ngOnInit(): void {
  }

  set_Table()
  {
    this.displayMode="Table";
  }
  set_List()
  {
    this.displayMode="List";
  }

  set_Large()
  {
    this.displayMode="Large";
  }

  set_Small()
  {
    this.displayMode="Small";
  }

}
