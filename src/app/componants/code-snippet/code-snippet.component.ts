import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.css'
})
export class CodeSnippetComponent {
  constructor(private dbService:DbService){}

  title = new FormControl("",[Validators.required])
  code = new FormControl("",[Validators.required])
  codeForm = new FormGroup({
    title : this.title,
    code: this.code
  })

  save(){
    return this.dbService.createSnippet(this.codeForm.value as Snippet)
    
  }
}
