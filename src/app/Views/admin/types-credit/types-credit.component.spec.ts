import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesCreditComponent } from './types-credit.component';

describe('TypesCreditComponent', () => {
  let component: TypesCreditComponent;
  let fixture: ComponentFixture<TypesCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
