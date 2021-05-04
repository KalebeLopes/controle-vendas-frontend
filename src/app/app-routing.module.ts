import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { VendaComponent } from './venda/venda.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { AppComponent } from './app.component'
import { VendasComponent } from './vendas/vendas.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'venda', component: VendaComponent
  },
  {
    path: 'vendas', component: VendasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
