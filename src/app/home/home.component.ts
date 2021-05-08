import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { AuthService } from '../service/auth.service'
import { VendaService } from '../service/venda.service'
import { Venda } from '../Objetos/Venda'
import { QueryBindingType } from '@angular/compiler/src/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vendas: Venda[] = []

  constructor(
    private logged: AuthService,
    private vendaService: VendaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if (this.logged.loggedIn()) {
      alert('Faça login novamente')
      this.router.navigate(['/login'])
    }
    this.allSales()
  }

  allSales(){
    this.vendaService.getAllSales().subscribe((result) => {
      if(result.body){
        this.vendas = result.body

        this.vendas.forEach((obj) => {  // percorre o array de objetos
          obj.valorTotal = 0
          obj.qtdTotalItens = 0
          obj.vendas.forEach((item) => { // percorre o array de itens de cada objeto
            obj.valorTotal += (item.valor * item.quantidade) // atribui o valor total a cada objeto
            obj.qtdTotalItens += item.quantidade
          }) 
        })
        // console.log(this.vendas)
      }
    })
  }

}
