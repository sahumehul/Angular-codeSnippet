import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [CommonModule],
  providers: [DbService],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent  {

  codeSnippet = {
    title: "",
    code: ""
  }
  constructor(private route:ActivatedRoute,private dbService:DbService){}

  ngOnInit(){
    const docId = this.route.snapshot.paramMap.get("id")
    this.dbService.getCodeById(docId!).then((data:any)=>{
      this.codeSnippet = data
    })
    }

  
  
}
