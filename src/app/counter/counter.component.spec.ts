import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';
import { CounterComponent } from './counter.component';

describe('CounterComponent Unit', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  it('se debe crear el componente counter', () => {
    const fixture = TestBed.createComponent(CounterComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('se debe crear el text Counter: 23', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;

    expect(compiled.querySelector('h1')?.textContent).toEqual('Counter app');
  });

  it('Validar que el valor inicial del contador es 23', () => {
    const counter = new CounterComponent();

    expect(counter.contador).toBe(23);
  });
});

describe('Integration Testing', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent, ButtonDisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('evento Click Add', () => {
    const compiled: HTMLElement = fixture.nativeElement;

    const counterValue = compiled.querySelector('h1')!;

    const btnAdd: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#add');

    btnAdd.click();

    fixture.detectChanges();

    expect(counterValue.textContent).toEqual('Counter app');
  });

  it('evento Click Dis', () => {
    const compiled: HTMLElement = fixture.nativeElement;

    const counterValue = compiled.querySelector('h1')!;

    const btnDis: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#dis');

    btnDis.click();

    fixture.detectChanges();

    expect(counterValue.textContent).toEqual('Counter app');
  });
});
