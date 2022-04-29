import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-with-parameter',
  templateUrl: './custom-pipe-with-parameter.component.html',
  styleUrls: ['./custom-pipe-with-parameter.component.css']
})
export class CustomPipeWithParameterComponent  {

  min:string  ="";
  max:string  = "";


  minVal:string  ="";
  maxVal:string  ="";

  public empsArray:any[] = [
    {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":10},
    {"empno":6369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":10},
    {"empno":6499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":10},
    {"empno":6521,"ename":"WARD","job":"ANALYST","sal":1250,"deptno":10},
    {"empno":6566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":10},
    {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250,"deptno":20},
    {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850,"deptno":20},
    {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450,"deptno":20},
    {"empno":7839,"ename":"KING","job":"PRESIDENT","sal":5000,"deptno":20},
    {"empno":7844,"ename":"TURNER","job":"SALESMAN","sal":1500,"deptno":20},
  
    ];


    filterData_click()
    {
      this.min = this.minVal;
      this.max = this.maxVal;
    }

}
