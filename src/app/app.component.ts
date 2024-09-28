import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componants/navbar/navbar.component";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';
import {NgxSpinnerModule} from "ngx-spinner";
import { SpinnerComponent } from './componants/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,NgxSpinnerModule,SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // isLoading = true
  constructor(){
    initializeApp(firebaseConfig)

    // setTimeout(()=>{
    //   this.isLoading = false
    // },)
  }
}
