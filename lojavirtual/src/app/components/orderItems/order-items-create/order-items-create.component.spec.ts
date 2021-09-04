import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemsCreateComponent } from './order-items-create.component';

describe('OrderItemsCreateComponent', () => {
  let component: OrderItemsCreateComponent;
  let fixture: ComponentFixture<OrderItemsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
