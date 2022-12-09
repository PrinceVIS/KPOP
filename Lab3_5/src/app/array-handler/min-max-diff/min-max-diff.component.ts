import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'min-max-diff',
  templateUrl: './min-max-diff.component.html',
  styleUrls: ['./min-max-diff.component.css']
})
export class MinMaxDiffComponent {
    private _min : number;
    private _max : number;
    private _difference : number;

    get min() : number{
      return this._min;
    }

    get max() : number{
      return this._max;
    }

    @Input()
    set min(min : number){
      this._min = min;
      this._difference = this._max - this._min;
    }

    @Input()
    set max(max : number){
      this._max = max;
      this._difference = this._max - this._min;
    }
    
    get difference() : number{
      return this._difference;
    }

    constructor(){
      this._min = 0;
      this._max = 0;
      this._difference = 0;
    }
}
