import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { VendaComponent } from './venda/venda.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';


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
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
