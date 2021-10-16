import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoComponent } from './empleados.component';

describe('ColaboradoresComponent', () => {
  let component: EmpleadoComponent;
  let fixture: ComponentFixture<EmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
