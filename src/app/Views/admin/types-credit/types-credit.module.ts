import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesCreditRoutingModule } from './types-credit-routing.module';
import {TypesCreditComponent} from "./types-credit.component";


@NgModule({
  declarations: [TypesCreditComponent],
  imports: [
    CommonModule,
    TypesCreditRoutingModule
  ]
})
export class TypesCreditModule { }
