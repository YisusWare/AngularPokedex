import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';


@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    TableModule,
    CardModule,
    ChartModule,
    DropdownModule
  ]
})
export class PrimeNGModule { }
