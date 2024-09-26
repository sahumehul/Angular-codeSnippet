import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  menuValue: boolean = false;
  menu_icon : string = "bi bi-list"

  openMenu(){
    this.menuValue = !this.menuValue
    this.menu_icon = this.menuValue ? "bi bi-x" : "bi bi-list"
  }
}
