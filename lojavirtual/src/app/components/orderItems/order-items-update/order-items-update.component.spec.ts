import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemsUpdateComponent } from './order-items-update.component';

describe('OrderItemsUpdateComponent', () => {
  let component: OrderItemsUpdateComponent;
  let fixture: ComponentFixture<OrderItemsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
