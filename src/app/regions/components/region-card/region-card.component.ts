import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.css']
})
export class RegionCardComponent implements OnInit{
  @Input() regionName: string  = '';

  pokedexesList! : pokedexDropdown[] ;

  constructor(private PokedexService:PokedexService){

  }

  ngOnInit(): void {
    
  }


  fnEvaluateRegion(){
    
    switch(this.regionName){
      case 'kanto': return'kanto-card';
      case 'johto': return'johto-card';
      case 'hoenn': return'hoenn-card'
      case 'sinnoh': return'sinnoh-card';
      case 'unova': return'unova-card';
      case 'kalos': return'kalos-card';
      case 'alola': return'alola-card';
      case 'galar': return'galar-card';
      case 'hisui': return'hisui-card';
    }

    return ''
  }


}

interface pokedexDropdown {
  name: string,
  code: number
}
