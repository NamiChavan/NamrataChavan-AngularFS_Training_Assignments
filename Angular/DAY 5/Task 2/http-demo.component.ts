import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  constructor(private httpobj: HttpClient) {   
  }


  DataArray:any[]=[];

 ngOnInit(): void{
   this.getData_Click();
 }



getData_Click()
{
  let url= "https://reqres.in/api/users"

  this.httpobj.get(url).subscribe((resData:any)=>
  {
    this.DataArray=resData.data;
     console.log(this.DataArray);
  });
}




}
