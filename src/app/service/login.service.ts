import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt'

import { User } from '../Objetos/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API = `${environment.API}/user`
  helper = new JwtHelperService()

  constructor(private $http: HttpClient) { }

  listar(){
    return this.$http.get<User[]>(`${this.API}`)
  }

  logar(body: any){
    return this.$http.post(`${this.API}/login`, body, {observe: 'body'})
  }

  loggedIn() {
    const token = localStorage.getItem('token')
    if (token)
      return this.helper.isTokenExpired(token)
    else 
      return true
  }

  // deletar(id: any){
  //   return this.$http.delete(`${this.API}/${id}`)
  // }
  criar(user: User) {
    return this.$http.post(`${this.API}`, user, {observe: 'response'})
  }
  // editar(produto: User, id: any) {
  //   return this.$http.put(`${this.API}/${id}`, produto)
  // }
}
