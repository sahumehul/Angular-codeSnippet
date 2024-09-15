import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [CommonModule],
  providers: [DbService],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent  {
  
  
}
