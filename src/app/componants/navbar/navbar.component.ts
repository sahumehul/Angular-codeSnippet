import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LoginComponent,SignupComponent,RouterLink,RouterLinkActive,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuValue: boolean = false;
  menu_icon : string = "bi bi-list"
  isLoader = true
  

  constructor(public authService: AuthService) {
    setTimeout(()=>{
      this.isLoader = false

    })
  }

  openMenu(){
    this.menuValue = !this.menuValue
    this.menu_icon = this.menuValue ? "bi bi-x" : "bi bi-list"
  }
  
}
