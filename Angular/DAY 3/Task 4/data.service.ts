import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  deptno:number = 0;
  dname:string = "";
  loc:string = "";

  deptsArray:Dept[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"}
  ];


  public getEmpData():any[]
  {
    return this.deptsArray;
  }


  addDept_click(dept:number, name:string, loc:string)
  {
      let deptObj:Dept = new Dept();
      deptObj.deptno =dept;
      deptObj.dname = name;
      deptObj.loc = loc;

      if(!this.dataAlreadyPresent(dept)){
        this.deptsArray.push(deptObj);
      }
      
  }
  dataAlreadyPresent(dept:number){
    let index = this.deptsArray.findIndex(item => item.deptno == dept); 
    console.log(index, "index");
    
    if(index === -1){
      return false
    }
    else{
      return true
    }
  }




  delete_click(dno:number)
  {
    let index = this.deptsArray.findIndex(item => item.deptno == dno);
    this.deptsArray.splice(index, 1);
  }

  
}
export class Dept
{
  deptno:number = 0;
    dname:string ="";
    loc:string = "";
}