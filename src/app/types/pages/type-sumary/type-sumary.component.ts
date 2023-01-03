import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../../../services/pokedex.service';
import { TypeRequest, DamageRelations } from '../../../Interfaces/typeRequest.interface';
import { Result } from '../../../Interfaces/type.interface';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-type-sumary',
  templateUrl: './type-sumary.component.html',
  styleUrls: ['./type-sumary.component.css']
})
export class TypeSumaryComponent implements OnInit{

  typeName : string = '';
  doubleDamageFrom : any[] = [];
  doubleDamageTo : any[] = [];
  halfDamageFrom : any[] = [];
  halfDamageTo : any[] = [];
  japaneseName : string = '';
  pokemonQty : number = 0;
  movesQty : number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private pokedexService:PokedexService){

                this.activatedRoute.params.subscribe( params =>{
                  this.pokedexService.getTypeSumary(params['id'])
                  .subscribe( result =>{
                    this.typeName = result.name

                    this.doubleDamageFrom = result.damage_relations.double_damage_from;
                    this.doubleDamageTo = result.damage_relations.double_damage_to;
                    this.halfDamageFrom = result.damage_relations.half_damage_from;
                    this.halfDamageTo = result.damage_relations.double_damage_to;
                    this.japaneseName = `${result.names[0].name}(${result.names[0].language.name})` ;
                    this.pokemonQty = result.pokemon.length;
                    this.movesQty = result.moves.length;
                  })
  })
  }

  ngOnInit(): void {
    
  }
}
