import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,SpinnerComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  isLoading = true
  constructor(private router:Router,private authService: AuthService){
    setTimeout(() => {
      this.isLoading = false
    }, );
  }
  
  register(regForm:NgForm){
    this.authService.registerUser(regForm.value.email,regForm.value.password)
  }

  reset(regForm:NgForm){
    regForm.reset()
  }
}
