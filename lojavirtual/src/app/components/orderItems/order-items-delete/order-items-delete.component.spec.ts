import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemsDeleteComponent } from './order-items-delete.component';

describe('OrderItemsDeleteComponent', () => {
  let component: OrderItemsDeleteComponent;
  let fixture: ComponentFixture<OrderItemsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
