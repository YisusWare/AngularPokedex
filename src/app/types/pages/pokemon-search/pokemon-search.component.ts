import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit{

pokemon :string ='';

constructor(private ActivatedRoute:ActivatedRoute,private PokedexService:PokedexService){}

ngOnInit(): void {
  this.ActivatedRoute.params.subscribe( params => {
    try {
      this.pokemon = params['name']
    } catch (error) {
      
    }
    
  })
}

}
