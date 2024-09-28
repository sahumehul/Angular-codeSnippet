import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  spinsCount = 0;

  constructor(private spinnerService : NgxSpinnerService) { }

  spin(){
    this.spinsCount++;
    this.spinnerService.show(undefined,{
      type : "ball-scale-ripple",
      bdColor : "rgba(0,0,0,0.8)",
      color : "#fff",
      size :"default"
    })
  }

  idle(){
    this.spinsCount--;
    if(this.spinsCount <=0){
      this.spinsCount =0
    }
    this.spinnerService.hide();
  }
}
