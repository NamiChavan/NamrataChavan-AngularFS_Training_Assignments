import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  deptno:any;
  dname:string = "";
  loc:string = ""
  public empsArray:any[] = [];

    constructor(private _dataService:DataService) { }

    ngOnInit()
    {
      this.getData_click();
    }

    getData_click()
    {
       this.empsArray = this._dataService.getEmpData();
    }

    addDept_click() {
      this._dataService.addDept_click(this.deptno, this.dname, this.loc)
    }
    delete_click(dno:number)
    {
      this._dataService.delete_click(dno)
    }


}
