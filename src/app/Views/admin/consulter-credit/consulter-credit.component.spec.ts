import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCreditComponent } from './consulter-credit.component';

describe('ConsulterCreditComponent', () => {
  let component: ConsulterCreditComponent;
  let fixture: ComponentFixture<ConsulterCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
