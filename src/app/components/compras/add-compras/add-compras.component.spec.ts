import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComprasComponent } from './add-compras.component';

describe('AddComprasComponent', () => {
  let component: AddComprasComponent;
  let fixture: ComponentFixture<AddComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
