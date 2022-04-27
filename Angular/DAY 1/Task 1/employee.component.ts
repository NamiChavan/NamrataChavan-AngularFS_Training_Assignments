import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  public EmployeeId:number  = 12345;
  public EmployeeName:string  = "Stephen";
  public EmployeeJob:string  = "Manager"
  public EmployeeSalary:number  = 75000
  public EmployeeDepo:number  = 10
  

}
