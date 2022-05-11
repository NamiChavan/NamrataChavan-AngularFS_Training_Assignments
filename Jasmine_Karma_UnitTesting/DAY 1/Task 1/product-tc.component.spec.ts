import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductTCComponent } from './product-tc.component';

describe('ProductTCComponent', () => {
  let component: ProductTCComponent;
  let fixture: ComponentFixture<ProductTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTCComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 it('quantity property should be 1 as a default value', () => {
  const output:string  = component.quantity;
  expect(output).toBe('1');
});


it('default result message should be empty', () => {
  //let resultobj=fixture.nativeElement.querySelector('#result');
  //resultobj.dispatchEvent(new Event('input'))
  const strOutput:string  = component.result;
  expect(strOutput).toBe("");
  //expect(resultobj.value).toBe('');
});


it('Checking result message by calling method onClickSubmit()', () => {
 component.onClickSubmit();
 expect(component.result.toString()).toBe(NaN.toString());
  
});


it('Checking result message by calling method onClickSubmit() with NaN value', () => {
  component.price= "NaN"
  component.quantity="NaN"
  component.onClickSubmit();
  expect(component.result.toString()).toBe(NaN.toString());
   
 });



it('Checking two way data binding template', () => {
  let inputArray = fixture.nativeElement.querySelectorAll("input");
  inputArray[1].value = '10';
  inputArray[1].dispatchEvent(new Event('input'));
   expect(component.price).toBe( inputArray[1].value);

 });


//  it('should display message in span "result:125"', () => {
//   const inputArray = fixture.nativeElement.querySelectorAll("input");

//  inputArray[0].value= 'Namrata';
//  inputArray[0].dispatchEvent(new Event('input'));
 

//  inputArray[1].value= '25';
//  inputArray[1].dispatchEvent(new Event('input'));
 
//  inputArray[2].value= '5';
//  inputArray[2].dispatchEvent(new Event('input'));
 
//  let inputobj=fixture.nativeElement.querySelector('button')
//  inputobj.dispatchEvent(new Event('click')) ;

//  fixture.detectChanges();
//  let paraobj=fixture.nativeElement.querySelector('span')
//  //inputobj.dispatchEvent(new Event('onClickSubmit')) ;

//    expect(paraobj.textContent).toBe( "result:125");

//  });
 
});
