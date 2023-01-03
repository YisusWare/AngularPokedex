import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../../services/pokedex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-sumary',
  templateUrl: './pokemon-sumary.component.html',
  styleUrls: ['./pokemon-sumary.component.css']
})
export class PokemonSumaryComponent implements OnInit{

  pokemonName: string = '';

  pokemonImage: string = '';

  pokemonAbilities: string[] = [];

  pokemonEggGroups: string[] = [];

  pokemonTypes: string[] = [];

  pokedexDescription: string = '';

  pokemonId: number = 0;

  data : any;

  baseStats: number[] = [];
  constructor(private activatedRoute:ActivatedRoute,private pokedexService:PokedexService){

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      this.pokedexService.getPokemonSumaryByName(params['name'])
      .subscribe(result =>{
        
        this.pokemonName = result.name

        this.pokemonId = result.id

        this.pokemonImage = result.sprites.front_default;

        result.abilities.forEach((r,index)=>{
          this.pokemonAbilities[index] = r.ability.name
        })

        result.stats.forEach((r,index)=>{
          this.baseStats[index] = r.base_stat
        })

        result.types.forEach((r,index)=>{
          this.pokemonTypes[index] = r.type.name
        })

        this.data = {
          labels: ['Hp','Attack','Defense','Special-attack','Special-defense', 'Speed'],
          datasets:[
            {
              label: 'Base Stats',
              data: this.baseStats
            }
          ]
        }

        this.pokedexService.getPokemonSpecieSumaryById(this.pokemonId)
        .subscribe( result=>{
          result.egg_groups.forEach((r,index)=>{
            this.pokemonEggGroups[index] = r.name
          })

          this.pokedexDescription = result.flavor_text_entries[0].flavor_text.replace('\f',' ')
        })

      }) 
    })
    
  }
}
