import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesCatalogComponent } from './pages/types-catalog/types-catalog.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { TypeCardComponent } from './components/type-card/type-card.component';
import { TypeSumaryComponent } from './pages/type-sumary/type-sumary.component';
import { PokemonSpeciesComponent } from './pages/pokemon-species/pokemon-species.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonSearchComponent } from './pages/pokemon-search/pokemon-search.component';


@NgModule({
  declarations:[
    TypesCatalogComponent,
    TypeCardComponent,
    TypeSumaryComponent,
    PokemonSpeciesComponent,
    PokemonSearchComponent
  ],
  imports: [
    CommonModule,
    TypesRoutingModule,
    PrimeNGModule,
    SharedModule
  ]
})
export class TypesModule { }
