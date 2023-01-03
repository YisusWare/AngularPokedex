import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'app-regions-catalog',
  templateUrl: './regions-catalog.component.html',
  styleUrls: ['./regions-catalog.component.css']
})
export class RegionsCatalogComponent implements OnInit {
  numbers: number[] = [1,2,3,4,5,6,7,8]

  regionsList: string[] = [];


  constructor(private pokedexService:PokedexService){

  }

  ngOnInit(): void {
    
    this.pokedexService.getAllRegions()
    .subscribe(result=>{
      result.results.forEach((r,index)=>{
        this.regionsList[index] = r.name
      })
    })
  }

  

}
