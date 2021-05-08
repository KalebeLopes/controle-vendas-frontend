import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment';
import { User } from '../Objetos/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API = `${environment.API}/user`

  constructor(private $http: HttpClient) { }

  listar(){
    return this.$http.get<User[]>(`${this.API}`)
  }

  logar(body: any){
    return this.$http.post(`${this.API}/login`, body, {observe: 'body'})
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
