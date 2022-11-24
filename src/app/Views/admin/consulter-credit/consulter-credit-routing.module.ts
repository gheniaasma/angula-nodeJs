import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjouterOffreComponent} from "../ajouter-offre/ajouter-offre/ajouter-offre.component";
import {ConsulterCreditModule} from "./consulter-credit.module";
import {ConsulterCreditComponent} from "./consulter-credit.component";

const routes: Routes = [
  {path:'',component:ConsulterCreditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsulterCreditRoutingModule { }
