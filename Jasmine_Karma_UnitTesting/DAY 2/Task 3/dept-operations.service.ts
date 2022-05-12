import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptOperationsService {
  constructor(private httpObj:HttpClient) { }

  baseUrl:string  = "http://localhost:3000/depts/";

  public addDepartment(dobj:any):any
  {
    return this.httpObj.post(this.baseUrl,dobj);
  }

  public deleteDepartment(id:number):any
  {
    return this.httpObj.delete(this.baseUrl + id);
  }

  public getAllDepartments():Observable<any>
  {
    return this.httpObj.get(this.baseUrl);
  }
}
