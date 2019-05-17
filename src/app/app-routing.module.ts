import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Pessoa/listar/listar.component';
import { EditarComponent } from './Pessoa/editar/editar.component';
import { AdicionarComponent } from './Pessoa/adicionar/adicionar.component';

const routes: Routes = [
  { path:'listar', component: ListarComponent },
  { path:'editar', component: EditarComponent },
  { path:'adicionar', component: AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
