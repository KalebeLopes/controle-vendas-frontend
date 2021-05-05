import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../service/login.service'
import { HttpErrorResponse } from '@angular/common/http';


import { User } from '../Objetos/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'project';
  email: string = ''
  senha: string = ''
  autenticado: boolean = false

  user: User = new User('', '', '')

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {

  }

  logar = () => {
    if (this.user.email != '' && this.user.senha != '') {
      console.log('user ',this.user)
      this.loginService.logar(this.user).subscribe(res => {
        console.log('Autenticado')
        this.autenticado = true
        this.router.navigate(['venda', this.autenticado])
      }, (err: HttpErrorResponse) => {
        alert('Dados inválidos!')
        location.reload()
      })
    }
  }

}
