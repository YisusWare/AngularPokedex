import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../../../services/pokedex.service';
import { PokemonEntry } from '../../../Interfaces/regionPokedexRequest.interface';

@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.css']
})
export class PokemonSpeciesComponent implements OnInit{

  pokemonList: string[] = [];

  currentPokemonList: string[] =[];

  currentPage: number = 1;

  totalPages: number = 0;

  btnBefore : any;

  btnNext : any;


  constructor(private ActivatedRoute:ActivatedRoute,
              private PokedexService:PokedexService){

  }

  ngOnInit(){

    this.btnBefore = document.querySelector('#before-button')
    this.btnBefore.disabled = true;
    
    this.btnNext = document.querySelector('#next-button');

    this.ActivatedRoute.params
    .subscribe( params => {
      this.PokedexService.getPokemonSpeciesByRegion(params['name'])
      .subscribe( result =>{


        result.pokemon_entries.forEach((r,index)=>{
          this.pokemonList[index] = r.pokemon_species.name
        })

        this.currentPokemonList = this.pokemonList.slice(0,10);

        this.totalPages = Math.ceil(result.pokemon_entries.length / 10);
      })    
    })
  }

  fnBefore(){
    if(this.currentPage === 1)
      return
    
    this.currentPage --;

    if(this.currentPage === 1){
      this.btnBefore.disabled = true;
    }

    this.btnNext.disabled = false;

    this.currentPokemonList = this.pokemonList.slice((this.currentPage - 1) * 10,((this.currentPage - 1) * 10) + 10)
    
  }

  fnNext(){
    if(this.currentPage === this.totalPages)
      return
    
    this.currentPage ++;

    if(this.currentPage === this.totalPages){
      this.currentPokemonList = this.pokemonList.slice((this.currentPage - 1) * 10,this.pokemonList.length);
      this.btnNext.disabled = true;
    }

    this.btnBefore.disabled = false;

    this.currentPokemonList = this.pokemonList.slice((this.currentPage - 1) * 10,((this.currentPage - 1) * 10) + 10)

    console.log(this.currentPage + ' current page')
    console.log(this.currentPokemonList)
    
  }
}
