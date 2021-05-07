import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Venda } from '../Objetos/Venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private readonly API = `${environment.API}/venda`
  constructor(private $http: HttpClient) { }

  criar(venda: Venda) {
    return this.$http.post(`${this.API}`, venda, {observe: 'response'})
  }
}
