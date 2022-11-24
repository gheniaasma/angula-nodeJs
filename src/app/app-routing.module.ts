import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./Views/Front/acceuil/acceuil.module').then(m=>m.AcceuilModule)},
    {path:'credit',loadChildren:()=>import('./Views/Front/credit/credit.module').then(m=>m.CreditModule)},
    {path:'offre',loadChildren:()=>import('./Views/Front/offre/offre.module').then(m=>m.OffreModule)},
    {path:'transaction',loadChildren:()=>import('./Views/Front/transaction/transaction.module').then(m=>m.TransactionModule)},
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./Views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'dashbord',loadChildren:()=>import('./Views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'loginadmin',loadChildren:()=>import('./Views/admin/login-admin/login-admin.module').then(m=>m.LoginAdminModule)},
    {path:'ajouteroffre',loadChildren:()=>import('./Views/admin/ajouter-offre/ajouter-offre.module').then(m=>m.AjouterOffreModule)},
      {path:'consulterCredit',loadChildren:()=>import('./Views/admin/consulter-credit/consulter-credit.module').then(m=>m.ConsulterCreditModule)},
      {path:'typesCredit',loadChildren:()=>import('./Views/admin/types-credit/types-credit.module').then(m=>m.TypesCreditModule)}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
