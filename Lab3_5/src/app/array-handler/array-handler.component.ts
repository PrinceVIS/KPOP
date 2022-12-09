import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'array-handler',
  templateUrl: './array-handler.component.html',
  styleUrls: ['./array-handler.component.css']
})
export class ArrayHandlerComponent {
    private _array : Array<number>;
    private _arraySize : number;
    
    get array() : Array<number> {
        return this._array;
    }
    
    get arraySize() : number {
        return this._arraySize;
    }

    set arraySize(size : number) {
        this._arraySize = size == null ? 0 : size;
        for(let i : number = this._array.length; i < this._arraySize; i++ ){
            this._array.push(0);
        }  
        while(this._arraySize < this._array.length){
            this._array.pop();
        }
    }

    constructor(){
        this._array = new Array<number>();
        this._arraySize = 0;
    }

    trackByFn(index : number) : number {
        return index;
    }

    getMin() : number{
        return Math.min(...this._array);
    }

    getMax() : number{
        return Math.max(...this._array);
    }
  
}
