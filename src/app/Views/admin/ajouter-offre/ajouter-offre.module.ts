import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterOffreRoutingModule } from './ajouter-offre-routing.module';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';


@NgModule({
  declarations: [
    AjouterOffreComponent
  ],
  imports: [
    CommonModule,
    AjouterOffreRoutingModule
  ]
})
export class AjouterOffreModule { }
