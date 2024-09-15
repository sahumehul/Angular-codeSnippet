import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dbService:DbService){}

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
