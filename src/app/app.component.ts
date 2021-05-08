import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from './service/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendProject';
  

  constructor(
    private router: Router,
    private logged: AuthService
  ) { }

  ngOnInit(): void {
    if(this.logged.loggedIn()) {
      // alert('Faça login novamente')
      this.router.navigate(['/login']) 
    }
  }

  hideNav(): String {
    // console.log(this.router.url)
    return this.router.url
  }

  logout(): void{
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')

    this.router.navigate(['/login'])
  }

}
