import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  contador: number = 23;

  handleCount(value: number) {
    //value ++
    this.contador = value;
  }

  handleDis(value: number) {
    this.contador = value;
  }
}
