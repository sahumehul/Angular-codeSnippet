import { Routes } from '@angular/router';
import { LoginComponent } from './componants/login/login.component';
import { SignupComponent } from './componants/signup/signup.component';
import { NotFoundComponent } from './componants/not-found/not-found.component';
import { CodeSnippetComponent } from './componants/code-snippet/code-snippet.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path : "login", component :LoginComponent},
    {path : "signup", component :SignupComponent},
    {path : "codesnippet", component :CodeSnippetComponent,canActivate :[authGuard]},
    {path : "about", loadComponent: ()=> import("./componants/about/about.component").then(mod=> mod.AboutComponent)},
    {path: "",redirectTo :"login",pathMatch:"full"},
    {path:"**",component:NotFoundComponent}

];
