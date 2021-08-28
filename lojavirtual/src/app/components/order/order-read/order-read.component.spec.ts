import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReadComponent } from './order-read.component';

describe('OrderReadComponent', () => {
  let component: OrderReadComponent;
  let fixture: ComponentFixture<OrderReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
