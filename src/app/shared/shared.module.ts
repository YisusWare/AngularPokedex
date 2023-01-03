import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonSumaryComponent } from './pages/pokemon-sumary/pokemon-sumary.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenubarComponent,
    ErrorComponent,
    HomeComponent,
    PokemonCardComponent,
    PokemonSumaryComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    FormsModule
  ],exports:[
    MenubarComponent,
    ErrorComponent,
    PokemonCardComponent,
    PokemonSumaryComponent
  ]
})
export class SharedModule { }
