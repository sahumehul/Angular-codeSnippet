import { Injectable } from '@angular/core';
import { addDoc, collection, getDoc, getDocs, getFirestore,doc } from "firebase/firestore";
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

   async getAllCode(){
    let result:any[] = [];
    const querySnap = await getDocs(collection(this.db, "snippet"))
    querySnap.forEach((doc)=>{
      
      result.push({id:doc.id,...doc.data()})
      
    }) 
    return result
   }

   async getCodeById(docId : string){
    const docRef = doc(this.db, "snippet",docId);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      console.log("Doc data", docSnap.data());
      return docSnap.data();
      
    }else{
      return {
        id:"",
        title : "Not found",
        code:"Not found"
      }
    }

   }
}
