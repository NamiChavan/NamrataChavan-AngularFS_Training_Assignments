import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancycard-table',
  templateUrl: './fancycard-table.component.html',
  styleUrls: ['./fancycard-table.component.css']
})
export class FancycardTableComponent implements OnInit {

  public empsArray:any[] = [
    {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":1},
    {"empno":6369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":2},
    {"empno":6499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":3},
    {"empno":6521,"ename":"WARD","job":"ANALYST","sal":1250,"deptno":4},
    {"empno":6566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":5},
    
  
    ];




  constructor() { }

  ngOnInit(): void {
  }

}
