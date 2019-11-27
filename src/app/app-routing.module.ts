import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: AccueilComponent},
  {path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
