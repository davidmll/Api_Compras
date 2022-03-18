import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComprasComponent } from './show-compras.component';

describe('ShowComprasComponent', () => {
  let component: ShowComprasComponent;
  let fixture: ComponentFixture<ShowComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
