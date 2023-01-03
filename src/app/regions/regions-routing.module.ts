import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsCatalogComponent } from './pages/regions-catalog/regions-catalog.component';
import { PokemonSpeciesComponent } from './pages/pokemon-species/pokemon-species.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'regions_catalog',
      component: RegionsCatalogComponent
    },
    {
      path: 'region_species_catalog/:name',
      component: PokemonSpeciesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
