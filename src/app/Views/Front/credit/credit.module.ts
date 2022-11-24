import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRoutingModule } from './credit-routing.module';
import { CreditComponent } from './credit/credit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreditComponent
  ],
  imports: [
    CommonModule,
    CreditRoutingModule,
    FormsModule
  ]
})
export class CreditModule { }
