import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoading = true;
  constructor(private dbService:DbService){
    setTimeout(()=>{
      this.isLoading = false
    })
  }

  items : {id:string, title:string}[] = []
  ngOnInit(){
    console.log("Component initialized"); // To ensure ngOnInit is called
    this.dbService.getAllCode().then((data: any)=>{
       console.log(data); // Debugging the response from service
       this.items = data;
       
     }).catch((error)=>{
       console.log("Error in fetching data:", error);
     });
  }
}
