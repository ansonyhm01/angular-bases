import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output()
  public onDeleteIndex:EventEmitter<string>=new EventEmitter()
  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10
  }];
  constructor() { }

  ngOnInit(): void {
  }
  // onDeleteCharacter(indice:number):void{
  //   console.log({indice})
  // }
  onDeleteIndexEmit(id:string):void{
    this.onDeleteIndex.emit(id)
  }

}
