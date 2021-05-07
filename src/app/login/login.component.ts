import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../service/login.service'
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../Objetos/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'project';

  loginForm: FormGroup

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private loginService: LoginService,
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {

  }

  logar = () => {
    // const email: String = this.loginForm.get('email')?.value
    // const senha: String = this.loginForm.get('senha')?.value
    
    console.log(this.loginForm.value)
    // console.log(senha)

    if (this.loginForm.valid) {
      this.loginService.logar(this.loginForm.value)
      .subscribe((res: any) => {
        // console.log(res.token)
        if(res.token && res.expiresIn){
          localStorage.setItem('token', res.token)
          localStorage.setItem('expiresIn', res.expiresIn)
          console.log(localStorage.getItem('token'))
          this.router.navigate(['/venda'])
        }
      }, 
      (err: HttpErrorResponse) => {
        alert('Dados inválidos!')
        location.reload()
      })
    }
  }

}
