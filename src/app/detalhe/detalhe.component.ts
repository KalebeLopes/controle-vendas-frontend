import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { VendaService } from '../service/venda.service'
import { Item } from '../Objetos/Item'

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  itens: Item[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private vendaService: VendaService,
    ) { }

  ngOnInit(): void {
    const idSale = this.getIdParam()
    this.vendaService.getOne(idSale).subscribe((res) => {
      if (res.body?.vendas) {
        res.body.vendas.forEach((res) => {
          this.itens.push(res)
        })

        console.log(this.itens)
      }
    })
  }

  getIdParam(): string {
    let idSale = ''
    this.activatedRoute.params.subscribe((params) => {
      idSale = params['id']
    })
    return idSale
  }

}
