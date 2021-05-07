import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendProject';
  autenticado: boolean = false 

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/login']) 
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
