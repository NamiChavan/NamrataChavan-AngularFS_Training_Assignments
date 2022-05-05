import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit {

  id:number  = 0;
  ename:string  = "";
  job:string  = "";
  sal:string = "";
  deptno:number = 0;

  empArray:any[] = [];

  constructor(private crudservice:CrudService) { }

  ngOnInit(): void {
  }
  getData_click()
  {
			this.crudservice.getAllEmp().subscribe( (resData:any) =>
			{
        this.empArray = resData;
			});
  }

  addData_click() {
    let empObj:any = {};
    empObj.id = 0;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;

    console.log(empObj);

    this.crudservice.addEmployee(empObj).subscribe( (resData:any) =>
    {
      // alert("New Student details are added to database");
      alert(resData.result)
      this.getData_click();
    });
  }

  updateData_click() {
    let empObj:any = {};
    empObj.id = this.id;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;

    console.log(empObj);

    this.crudservice.updateEmployee(empObj).subscribe( (resData:any) =>
    {
      
      alert(resData.result)
      this.getData_click();
    });
  }

  deleteData_click(sid:number) {

    this.crudservice.deleteEmployee(sid).subscribe( (resData:any) =>
    {
      alert(resData.result)
      this.getData_click();
    });

  }

  selectData_click(sid:number) {

    this.id = sid;

    this.crudservice.getEmployeeById(sid).subscribe( (resData:any) =>
    {
      this.id = resData.id;
      this.ename = resData.ename;
      this.job = resData.job;
      this.sal = resData.sal;
      this.deptno = resData.deptno;
    });
  }
  clearFields() {
    this.id =0;
    this.ename = "";
    this.job = "";
    this.sal = "";
    this.deptno = 0;
  }
}
