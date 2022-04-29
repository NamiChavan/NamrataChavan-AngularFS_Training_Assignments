import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent  {

  // public userObj1:any = {uname:"Scott", gender: "M"};
  // public userObj2:any = {uname:"Nancy", gender: "F"};

  public empsArray:any[]  =
  [
    {EmpNo  :  1 ,Name  :  "Smith",  performanceGrade: "1"},
    {EmpNo  :  2 ,Name  :  "John",  performanceGrade: "2"},
    {EmpNo  :  3 ,Name  :  "Neeta",  performanceGrade: "3"},
    {EmpNo  :  4 ,Name  :  "Ajay",  performanceGrade: "4"},
  ];

}
