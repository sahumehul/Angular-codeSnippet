import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';


@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  providers: [DbService],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent  {

  codeSnippet = {
    title: "",
    code: ""
  }
  isLoading = true
  constructor(private route:ActivatedRoute,private dbService:DbService){
    setTimeout(() => {
      this.isLoading = false
    });
  }

  ngOnInit(){
    const docId = this.route.snapshot.paramMap.get("id")
    this.dbService.getCodeById(docId!).then((data:any)=>{
      this.codeSnippet = data
    })
    }

  
  
}
