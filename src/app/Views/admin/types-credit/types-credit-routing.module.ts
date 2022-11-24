import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsulterCreditComponent} from "../consulter-credit/consulter-credit.component";

const routes: Routes = [
  {path:'',component:ConsulterCreditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesCreditRoutingModule { }
