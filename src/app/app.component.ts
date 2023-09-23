import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string  = 'hola mundo';
  public counter:number = 10;
  increaseBy(valor:number):void {
    this.counter+=valor;
  }
  resetCounter(){
    this.counter=10;
  }
}
