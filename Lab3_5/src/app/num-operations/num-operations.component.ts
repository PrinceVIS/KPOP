import { Component } from '@angular/core';

@Component({
  selector: 'num-operations',
  templateUrl: './num-operations.component.html',
  styleUrls: ['./num-operations.component.css']
})
export class NumOperationsComponent {
    private firstNum : number | undefined;
    private secondNum : number | undefined;


    getSum() : number {
        return this.firstNum != null && this.secondNum != null 
                                ? Number(this.firstNum) + Number(this.secondNum) 
                                : 0;
    }

    getProduct() : number {
        return this.firstNum != null && this.secondNum != null 
                                ? Number(this.firstNum) * Number(this.secondNum)
                                : 0;
    }

    getDifference() : number {
        return this.firstNum != null && this.secondNum != null 
                                ? Number(this.firstNum) - Number(this.secondNum) 
                                : 0;
    }

    set setFirstNum(firstNum : number){
        this.firstNum = firstNum
    }

    set setSecondNum(secondNum : number){
        this.secondNum = secondNum
    }
}
