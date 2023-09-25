import { Injectable } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from "uuid"
console.log(uuid())
@Injectable({providedIn:'root'})
export class DbzService{
    public characters:Character[]=[{
        id:uuid(),
        name:'Krilin',
        power:1000
    },{
        id:uuid(),
        name:'Goku',
        power:9500
    },{
        id:uuid(),
        name:'Vegeta',
        power:7500
    }]
    addCharacter(character:Character):void{
        // const newCharacter={
        //     id:uuid(),
        //     name:character.name,
        //     power:character.power
        //  operador exprest:tomo todas la propiedad y exparasela en ente objeto}
        const newCharacter={id:uuid(),...character}
        this.characters.push(newCharacter)
        
    }
    // EliminarCharacter(indice:number){
    //     this.characters.splice(indice,1)
    // }
    onDeleteCharacterById(id:String){
        // debugger
        this.characters=this.characters.filter(character=>character.id!==id)
    }
}