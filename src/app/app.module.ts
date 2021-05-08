import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendaComponent } from './venda/venda.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service'
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component'
import { AuthInterceptor } from './interceptor/auth-interceptor.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    VendaComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
