import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
  items: MenuItem[] = [];

  search: string = '';

  constructor(private PokedexService:PokedexService, private router:Router){

  }
  
  ngOnInit(): void {
    this.items = [
      {label: 'Types', routerLink: 'types/types_catalog'},
      {label: 'Region', routerLink: 'regions/regions_catalog'}
    ]
  }

  searchPokemon(){
    
    this.router.navigate([`./types/pokemon_search/${this.search}`])
    this.search = ''
  }


}
