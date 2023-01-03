import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsCatalogComponent } from './pages/regions-catalog/regions-catalog.component';
import { RegionCardComponent } from './components/region-card/region-card.component';
import { PokemonSpeciesComponent } from './pages/pokemon-species/pokemon-species.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegionsCatalogComponent,
    RegionCardComponent,
    PokemonSpeciesComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    SharedModule
  ]
})
export class RegionsModule { }
