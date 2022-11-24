import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';

const routes: Routes = [
  {path:'',component:AjouterOffreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterOffreRoutingModule { }
