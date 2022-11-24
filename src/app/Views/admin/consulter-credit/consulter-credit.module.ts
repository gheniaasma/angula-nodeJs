import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsulterCreditRoutingModule } from './consulter-credit-routing.module';
import {ConsulterCreditComponent} from "./consulter-credit.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ConsulterCreditComponent],
  imports: [
    CommonModule,
    ConsulterCreditRoutingModule,
    FormsModule
  ]
})
export class ConsulterCreditModule { }
