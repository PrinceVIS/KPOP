import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab_3';

  private labNames : Array<string>;
  private currentLabName : string;


  constructor(){
    this.labNames = new Array<string>();

    this.currentLabName = "";
  }

  resetLab(currentActive : string) : void {
    this.currentLabName = currentActive;
  }

  checkAndAdd(labNames : Array<string>) : void{
    for(let i : number = 0; i < labNames.length; i++){
      if(!this.labNames.includes(labNames[i])){
        this.labNames.push(labNames[i]);
      }
    }
  }

  shouldMakeVisible(index : number) : boolean {
    return this.labNames.indexOf(this.currentLabName) == index;
  }
}
