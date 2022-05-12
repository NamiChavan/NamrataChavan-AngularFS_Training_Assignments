import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DeptOperationsService } from './dept-operations.service';

describe('DeptOperationsService', () => {
  let service: DeptOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [HttpClientModule]});
    service = TestBed.inject(DeptOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should return an Observable<any[]> with depts default data', (done) => {
    service.getAllDepartments().subscribe( (resData:any[]) => {
        expect(resData.length).toBe(5);
        done();
    });
  });

  
  it('should perform post operation using addDepartment method', () => {

    let obj:any = {"id":6,"dname":"Finance"};

   

    service.addDepartment(obj).subscribe( (resData:any) => {
        console.log(resData);
        expect(resData.length).toEqual(6);
 
    });


  });



  it('should perform delete operation using deleteDepartment method', () => {


   let id:number=6;

    service.deleteDepartment(id).subscribe( (resData:any) => {
        console.log(resData);
        expect(resData.length).toEqual(5);
    
    });


  });


  it('should perform delete operation using deleteDepartment method for invalid dept id', () => {


    let id:number=100;
 
     service.deleteDepartment(id).subscribe( (resData:any) => {
         console.log(resData);
         expect(resData).toEqual(null);
    
     });
 
 
   });

});
