import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe emitir el valor de 2', () => {
    let nuevoContador = 0;

    component.onAdd.subscribe((contador) => {
      nuevoContador = contador;
    });

    // Se llama dos veces para simular dos veces el clic en la función y que se cuente el numero
    component.add();
    component.add();

    expect(nuevoContador).toBe(2);
  });
});
