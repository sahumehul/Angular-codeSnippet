import { Routes } from '@angular/router';
import { LoginComponent } from './componants/login/login.component';
import { SignupComponent } from './componants/signup/signup.component';

export const routes: Routes = [
    {path : "login", component :LoginComponent},
    {path : "signup", component :SignupComponent}
];
