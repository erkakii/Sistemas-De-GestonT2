import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAPIComponent } from './formulario-api.component';

describe('FormularioAPIComponent', () => {
  let component: FormularioAPIComponent;
  let fixture: ComponentFixture<FormularioAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
