import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../../Interfaces/type.interface';

@Component({
  selector: 'app-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.css']
})

export class TypeCardComponent implements OnInit {
    @Input() type! : Result ;
    @Input() index! : number;

    constructor(){
      
    }

    ngOnInit(): void {
    }

    evaluateClass(){
     switch(this.type.name){
      case 'normal' :
          return 'normal-type-card'
      case 'fighting' :
          return 'fighting-type-card'
      case 'flying' :
          return 'flying-type-card'
      case 'poison' :
          return 'poison-type-card'
      case 'ground' :
          return 'ground-type-card'
      case 'rock' :
          return 'rock-type-card'
      case 'bug' :
          return 'bug-type-card'
      case 'ghost' :
          return 'ghost-type-card'
      case 'steel' :
          return 'steel-type-card'
      case 'fire' :
          return 'fire-type-card'
      case 'water' :
        return 'water-type-card'
      case 'grass' :
        return 'grass-type-card'
      case 'electric' :
        return 'electric-type-card'
      case 'psychic' :
        return 'psychic-type-card'
      case 'ice' :
        return 'ice-type-card'     
      case 'dragon' :
        return 'dragon-type-card'
      case 'dark' :
        return 'dark-type-card'     
      case 'fairy' :
        return 'fairy-type-card'
      
      default:
      return 'none'
     }

    }
}
