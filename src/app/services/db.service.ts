import { Injectable } from '@angular/core';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Snippet } from '../../model/model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db? : any
  constructor(private authService : AuthService) {
    this.db = getFirestore()
   }

  async createSnippet(snippet: Snippet){
    try{
      const docRef = await addDoc(collection(this.db, "snippet"),{
        ...snippet,
        by : this.authService.getId()
      })
      console.log("document written in", docRef.id);
      
    }catch(e){
      console.log(e);
      
      alert("error while adding data")
    }
   }

   async getCode(){
    
   }
}
