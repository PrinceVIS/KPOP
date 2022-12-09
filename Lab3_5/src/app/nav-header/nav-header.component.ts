import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
    private readonly currentLabClass : string = "current";

    @ViewChildren('tab_block') 
    private tabBlock !: QueryList<ElementRef>;

    private currentActive : Element | null;
    private labNames : Array<string>;

    @Output()
    passLabNamesEvent : EventEmitter<Array<string>>;
    @Output()
    labChangeEvent : EventEmitter<string>;
    

    constructor(){
        this.currentActive = null;
        this.labNames = new Array<string>();

        this.labChangeEvent = new EventEmitter<string>();
        this.passLabNamesEvent = new EventEmitter<Array<string>>();
    }

    ngAfterViewInit() : void {
        setTimeout(() => {
            this.currentActive = this.tabBlock?.get(0)?.nativeElement.querySelector('.current');

            let tabs : Element[] = this.tabBlock?.get(0)?.nativeElement.querySelectorAll('a');
            tabs.forEach(tab => this.labNames.push(tab.id));

            this.passLabNamesEvent.emit(this.labNames);
            this.labChangeEvent.emit(this.currentActive?.id);
        });
    }

    startLab(event : any) : void {
        this.currentActive?.classList.remove(this.currentLabClass);
        this.currentActive = event.target;
        this.currentActive?.classList.add(this.currentLabClass);

        this.labChangeEvent.emit(this.currentActive?.id);
    }
}
