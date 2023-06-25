import { Component } from '@angular/core';

@Component({
  selector: 'app-magos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public magoNames: string[] = ['Draco Malfoy', 'Harry Potter', 'Hermione Granger', 'Ron Weasley']

  public deleteMago?: string;

  removeLastMago():void{
    this.deleteMago = this.magoNames.pop();

  }


}
