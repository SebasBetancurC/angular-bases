import { Component } from '@angular/core';

@Component({
  selector: 'app-magos-mago',
  templateUrl: './mago.component.html',
  styleUrls: ['./mago.component.css']
})
export class MagoComponent {

  public name: string = 'Harry Potter';
  public age: number = 20;

get capitalizedName():string{
  return this.name.toUpperCase();
}

getMagoDescription():string{
  return `${this.name} -${this.age}`;
}

changeMago():void{
  this.name = 'Malfoy';
}

changeAge():void{
  this.age = 22;
}

resetForm():void{
  this.name = 'Harry Potter';
  this.age = 20;
}



}
