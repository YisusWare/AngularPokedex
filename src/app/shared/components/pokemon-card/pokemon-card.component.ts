import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokedexService } from '../../../services/pokedex.service';
import { Type } from '../../../Interfaces/pokemonRequest.interface';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit, OnChanges {
  @Input() pokemonName : string = '';

  pokemonTypes: String[] = [];

  pokemonImage : string = ''; 
  pokemonIndex : number = 0 ;

  render: boolean = true;
  constructor(private pokedexService:PokedexService){

  }

  ngOnInit(): void {
    this.pokedexService.getPokemonSumaryByName(this.pokemonName.toLowerCase())
    .subscribe( result => {
      this.render = true;
      result.types.forEach( (r,index)=> this.pokemonTypes[index] = r.type.name)

       this.pokemonImage = result.sprites.front_default
      
       this.pokemonIndex = result.id;
       
      },
      error=>{
        this.render = false
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pokedexService.getPokemonSumaryByName(this.pokemonName.toLowerCase())
    .subscribe( result => {
      this.render = true;
      result.types.forEach( (r,index)=> this.pokemonTypes[index] = r.type.name)

       this.pokemonImage = result.sprites.front_default
      
       this.pokemonIndex = result.id;
       
      },
      error =>{
          this.render = false
      })
  }

  evaluateClass(){
     
    switch(this.pokemonTypes[0]){
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
