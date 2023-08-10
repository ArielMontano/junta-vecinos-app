import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVecinosComponent } from './components/vecinos/list-vecinos/list-vecinos.component';
import { CreateVecinoComponent } from './components/vecinos/create-vecino/create-vecino.component';

const routes: Routes = [
  {path:'', redirectTo: 'lista-vecinos', pathMatch: 'full'},
  {path: 'lista-vecinos', component:ListVecinosComponent},
  {path: 'crear-vecino', component:CreateVecinoComponent},
  {path: 'editar-vecino/:id', component:CreateVecinoComponent},
  {path: '**', redirectTo: 'lista-vecinos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
