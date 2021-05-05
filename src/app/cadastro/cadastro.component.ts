import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';

import { LoginService } from '../service/login.service'
import { User } from '../Objetos/User'
// import { setTimeout } from 'timers';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: User = new User('', '', '')
  users: User[] = []
  confSenha: string = ''

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  validateEmail(email: string) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  cadastrar(){
    if(!this.validateEmail(this.user.email)) {
      alert('Formato do Email Inválido')
      // window.location.reload();
    } else if(this.user.senha !== this.confSenha){
      alert('Senhas não são iguais')
    }
    else {
      console.log(this.user)
      this.loginService.criar(this.user).subscribe(user => {
        if(user.status == 201) {
          alert('Usuário cadastrado com sucesso!')
          this.router.navigate(['/login'])
        } 
      }, (err: HttpErrorResponse) => {
        alert('Erro ao cadastrar usuário! ')
        location.reload()
      })
    }
  }

  // listar() {
  //  console.log(this.loginService.listar()) 
  // }

}
