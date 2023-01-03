import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/pages/error/error.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { PokemonSumaryComponent } from './shared/pages/pokemon-sumary/pokemon-sumary.component';

const routes: Routes = [
  {
    path: 'types',
    loadChildren: () => import('./types/types.module').then( m => m.TypesModule)
  },
  {
    path: 'regions',
    loadChildren: () => import('./regions/regions.module').then( m => m.RegionsModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemon_sumary/:name',
    component: PokemonSumaryComponent
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
