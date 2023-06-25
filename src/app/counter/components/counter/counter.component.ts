import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{counter}}</h3>
<button (click)="contar(+1)">+1</button>
<button (click)="contar(-1)">-1</button>
<button (click)="reiniciarContador()">Reset</button>
<hr>

  `
})

export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  contar(valor: number):void{
    this.counter += valor;
  }

  reiniciarContador():void{
    this.counter = 10;
  }


}




