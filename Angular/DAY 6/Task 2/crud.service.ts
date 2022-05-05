import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl:string  = "http://localhost:3000/Emp";

  constructor(private httpObj:HttpClient) { }

   // Read All
   public getAllEmp(): Observable<any>
   {
     return this.httpObj.get(this.baseUrl);
   }

  // Read Single
  public getEmployeeById(sid:number):any
  {
    return this.httpObj.get(this.baseUrl + sid);
  }

  // Create
  public addEmployee(stObj:any):any
  {
    return this.httpObj.post(this.baseUrl, stObj);
  }

  // Update
  public updateEmployee(stObj:any):any
  {
    return this.httpObj.put(this.baseUrl + stObj.id, stObj);
    // return this.httpObj.put(this.baseUrl, stObj);
  }


  // Delete
  public deleteEmployee(sid:number):any
  {
    return this.httpObj.delete(this.baseUrl + sid);
  }

// -------------------------------------------------------------------------------


  //TASK 2
  //  Customizing the response using RxJS operators
  //Display employee details based on the job

  getEmployeebyjob(job:string):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.job == job);
    })
    );
  }


  //Display Manager names works in the given department
  getManagerName(deptno:number,job:string):Observable<string[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {     
        return res.filter(item =>item.deptno == deptno && item.job == job).map((item) => item.ename)
    })
    );
  }


//Display all employee names and along with designation
  getNameAndJob():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => {
          return { 	ename: item.ename, job : item.job} });
    })
    );
  }

  //Display employees who not working in deptno - 10
  getEmployeebyDept():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.deptno !=10);
    })
    );
  }

//Sort the employee based on the salary
  getEmpbySorting():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.sort((a, b) => a.sal - b.sal);
    })
    );
  }
}
