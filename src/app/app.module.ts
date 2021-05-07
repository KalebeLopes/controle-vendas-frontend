import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendaComponent } from './venda/venda.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service'
import { CadastroComponent } from './cadastro/cadastro.component';
import { VendasComponent } from './vendas/vendas.component'

@NgModule({
  declarations: [
    AppComponent,
    VendaComponent,
    LoginComponent,
    CadastroComponent,
    VendasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
