import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


   // 2. Test child component loading
   it('should render child component elements -- product-details', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-product-list'));
    expect(childComponent).toBeTruthy();
  });

  // 3. Test all child components and verify length
  it('should Get all child components and verify the count -- product-details', () => {
    const childComponents  = fixture.debugElement.queryAll(By.css('app-product-list'));
    expect(childComponents.length).toBe(component.prod.length);
  });

   // 4. Test child component properties
   it('Access child class properties -- product-details', () => {
    const testObj:any = { prodno : 10,  pname : "Sales", loc : "Hyd" };
    const childComponent  = fixture.debugElement.query(By.css('app-product-list'));
    expect(childComponent.properties["prodObj"]).toEqual( component.prod[0] );
  });

  // 5. Test child component events
  it('testing child component events -- productRemove', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-product-list'));
    const dno = childComponent.properties["prodObj"].prodno;  
    childComponent.triggerEventHandler('onProRemoved', dno)
    let index = component.prod.findIndex( (item:any) => item.prodno == dno);
    expect(index).toBe(-1);
  });
});
