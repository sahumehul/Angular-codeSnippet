import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?:string
  constructor(private router:Router) { 
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
      if(user){
        this.uid = user.uid
        console.log("user logged in as", user.email);
        
      }else{
        this.uid = undefined
        console.log("user logged out");
        
      }
    })
  }

  isAuthenticated(){
    return this.uid ? true : false
  }

  getId(){
    return this.uid
  }

  registerUser(email: string, password:string){
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password).then((credentials)=>{
      const user = credentials.user
      console.log({user});
      this.router.navigate(['/login'])
      
    }).catch((error)=>{
      console.log(error.message);
      
    })
  }

  loginUser(email: string, password:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
      const user = userCredentials.user
      console.log(user);
      this.router.navigate(['/'])
      
    }).catch((error=>{
      const errMsg = error.message
      console.log(errMsg);
      
    }))
  }

  logout(){
    const auth = getAuth()
    signOut(auth).then((user)=>{
      console.log(this.uid);
      this.router.navigate(["/login"])
      
    }).catch((error)=>{
      console.log("Error while logging out");
      
    })
  }
}
