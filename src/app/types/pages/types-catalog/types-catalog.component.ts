import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'app-types-catalog',
  templateUrl: './types-catalog.component.html',
  styleUrls: ['./types-catalog.component.css']
})
export class TypesCatalogComponent implements OnInit{

  get types(){
    return this.PokedexService.types
  }


  constructor(private PokedexService:PokedexService){

  }

  ngOnInit(): void {
    this.PokedexService.getPokemonTypes();
  }
}
