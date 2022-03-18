import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowArticuloComponent } from './show-articulo.component';

describe('ShowArticuloComponent', () => {
  let component: ShowArticuloComponent;
  let fixture: ComponentFixture<ShowArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
