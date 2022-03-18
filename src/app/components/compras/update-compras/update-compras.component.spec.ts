import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComprasComponent } from './update-compras.component';

describe('UpdateComprasComponent', () => {
  let component: UpdateComprasComponent;
  let fixture: ComponentFixture<UpdateComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
