import { Component, OnInit } from '@angular/core';

import { LoginService } from '../service/login.service'
import { Venda } from '../Objetos/Venda'
import { ActivatedRoute, Router } from '@angular/router';
import { VendaService } from '../service/venda.service';
import { AuthService } from '../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  // venda: Venda = new Venda('', '', '')
  // vendas: Venda[] = []

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private vendaService: VendaService,
    private logged: AuthService
  ) { }

  ngOnInit(): void {
    if(this.logged.loggedIn()){
      alert('Faça login novamente')
      this.router.navigate(['/login'])
    }
  }

  salvar(){
    
  }

}
