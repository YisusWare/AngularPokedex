import { ErrorHandler, Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, observable } from 'rxjs';
import { Result, Type } from '../Interfaces/type.interface';
import { TypeRequest } from '../Interfaces/typeRequest.interface';
import { Observable } from 'rxjs';
import { PokemonRequest } from '../Interfaces/pokemonRequest.interface';
import { PokemonSpeciesRequest } from '../Interfaces/pokemonSpeciesRequest.interface';
import { RegionRequest } from '../Interfaces/regionRequest.interface';
import { RegionPokedexRequest } from '../Interfaces/regionPokedexRequest.interface';
import {throwError as observableThrowError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  public types: Result[] = []; 

  public typesArray: string[] =[
    
  ]
  constructor(private http: HttpClient) {

   }

   getPokemonTypes(){
      this.http.get<Type>('https://pokeapi.co/api/v2/type/').subscribe( (e) =>{
        this.types = e.results
        this.types.pop();
        this.types.pop();
      });
   }

   getTypeSumary(index:number):Observable<TypeRequest>{
    const URL: string = 'https://pokeapi.co/api/v2/type/';

    return this.http.get<TypeRequest>(`${URL}${index}`)
   }

   getPokemonSumaryByName(pokemonName: string){
    const URL: string = 'https://pokeapi.co/api/v2/pokemon/'

      return this.http.get<PokemonRequest>(`${URL}${pokemonName}`)
      .pipe(catchError(this.errorHandler))
    
   }

   errorHandler(error: HttpErrorResponse){
    
    return observableThrowError(error.message)
   }

   getPokemonSpecieSumaryById(pokemonName: number){
    const URL:string = 'https://pokeapi.co/api/v2/pokemon-species/'

    return this.http.get<PokemonSpeciesRequest>(`${URL}${pokemonName}`)
   }

   getAllRegions(){
    const URL: string = 'https://pokeapi.co/api/v2/region/'

    return this.http.get<RegionRequest>(URL)
   }

   getPokemonSpeciesByRegion(regionName : string){
    const URL: string = 'https://pokeapi.co/api/v2/pokedex/'
    let index: number = 0;

    switch(regionName){
      case 'kanto': index = 2
        break;

        case 'johto': index = 3
        break;

        case 'hoenn': index = 4
        break;

        case 'sinnoh': index = 5
        break;

        case 'unova': index = 9
        break;

        case 'kalos': index = 12
        break;

        case 'alola': index = 16
        break;

        case 'galar': index = 27
        break;

        case 'hisui': index = 30
      
    }

    return this.http.get<RegionPokedexRequest>(`${URL}${index}`)

   }

   

}
