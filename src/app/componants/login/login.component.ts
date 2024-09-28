import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { AuthService } from '../../services/auth.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoading = true
    constructor(private authService: AuthService){
      setTimeout(()=>{
        this.isLoading = false
      })
    }
    email = new FormControl("",
      [Validators.required, Validators.email]
    )

    password = new FormControl("",[
      Validators.required, Validators.minLength(6)
    ])

    loginForm = new FormGroup({
      email : this.email,
      password: this.password
    })

    loginBtn(){
      // console.log(this.loginForm.value);
      
      this.authService.loginUser(this.loginForm.value.email!,this.loginForm.value.password!)
    }

    reset(){
      this.loginForm.reset()
    }
}
