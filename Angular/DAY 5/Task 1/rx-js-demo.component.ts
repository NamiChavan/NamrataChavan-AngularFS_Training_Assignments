import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-js-demo',
  templateUrl: './rx-js-demo.component.html',
  styleUrls: ['./rx-js-demo.component.css']
})
export class RxJsDemoComponent {

  todo:string=""
  
  public todoArray:any[] = [
    {id:1,task:"angular", isEditable:false, isChecked: false},
    {id:2,task:"Dotnet", isEditable:false, isChecked: false},
    {id:3,task:"React",  isEditable:false, isChecked: false}
  ];

addData_click()
{

  let observableObj = new Observable( (subscriber) => {

        subscriber.next(this.todo);
  });

  observableObj.subscribe(
    {
       next  :  (resData:any) =>  {this.todoArray.push({task:resData,id:this.todoArray.length+1}) },
       error  : (errorData:any) =>  { console.log("Error Handled by code : " + errorData); },
    }
   );
}

delete_click(id:any){
  let observableObj = new Observable( (subscriber) => {

    subscriber.next(id);
  });

  observableObj.subscribe(
  {
    next  :  (data:any) =>  {
        let index = this.todoArray.findIndex(item => item.id == data);
        this.todoArray.splice(index, 1);
    },
    error  : (errorData:any) =>  { console.log("Error Handled by code : " + errorData); },
  }
  );
}

edit_click(id:any){
  let observableObj = new Observable( (subscriber) => {

    subscriber.next(id);
  });

  observableObj.subscribe(
  {
    next  :  (data:any) =>  {
      
        let newArray = this.todoArray.map((item) => {
         if(item.id === data) {
           return {...item, isEditable: !item.isEditable}
         } else{
           return item
         }
       })
       this.todoArray = newArray
       
    },
    error  : (errorData:any) =>  { console.log("Error Handled by code : " + errorData); },
  }
  );
}




}


