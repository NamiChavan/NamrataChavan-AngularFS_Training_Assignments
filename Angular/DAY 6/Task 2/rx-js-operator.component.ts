import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-rx-js-operator',
  templateUrl: './rx-js-operator.component.html',
  styleUrls: ['./rx-js-operator.component.css']
})
export class RxJsOperatorComponent implements OnInit {

  result: any[] = [];
  constructor(private crudservice:CrudService) { }

  ngOnInit(): void {
  }

  getData1_click()
  {
    this.crudservice.getEmployeebyjob("QA").subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData2_click()
  {
    this.crudservice.getManagerName(1,"Manager").subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData3_click()
  {
    this.crudservice.getNameAndJob().subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData4_click()
  {
    this.crudservice.getEmployeebyDept().subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData5_click()
  {
    this.crudservice.getEmpbySorting().subscribe(resData =>
      {
        this.result = resData;
      });
  }

}
