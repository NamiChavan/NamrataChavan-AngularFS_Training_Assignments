import { Component, OnInit } from '@angular/core';
import {DeptOperationsService} from '../dept-operations.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  constructor(private dservice:DeptOperationsService) { }

  ngOnInit(): void {
    this.getData_click();
  }
  dname:string="";
  id:number=0;
  depts:any[]=[];

  getData_click()
  {
			this.dservice.getAllDepartments().subscribe( (resData:any) =>
			{
        console.log(resData);
        this.depts = resData;
			});
  }

  addDepartment_Click()
  {
  let dobj:any={};
  dobj.dname=this.dname;
  dobj.id=this.id;
   this.dservice.addDepartment(dobj).subscribe((resData:any)=>{
   alert("dept added");
    this.getData_click();
   });
  }

  deleteDepartment_Click(id:number)
  {
    this.dservice.deleteDepartment(id).subscribe( (resData:any) =>
    {
      alert("department is deleted from database");
      this.getData_click();
    });
  }


}
