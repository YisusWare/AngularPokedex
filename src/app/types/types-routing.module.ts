import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesCatalogComponent } from './pages/types-catalog/types-catalog.component';
import { TypeSumaryComponent } from './pages/type-sumary/type-sumary.component';
import { PokemonSpeciesComponent } from './pages/pokemon-species/pokemon-species.component';
import { PokemonSumaryComponent } from '../shared/pages/pokemon-sumary/pokemon-sumary.component';
import { PokemonSearchComponent } from './pages/pokemon-search/pokemon-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'types_catalog',
        component: TypesCatalogComponent
      },
      {
        path: 'type_sumary/:id',
        component: TypeSumaryComponent
      },
      {
        path: 'type_species_catalog/:id',
        component: PokemonSpeciesComponent
      },
      {
        path: 'pokemon_search/:name',
        component: PokemonSearchComponent
      }
     
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
