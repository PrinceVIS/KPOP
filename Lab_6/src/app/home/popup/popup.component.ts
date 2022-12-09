import { Component, HostBinding, HostListener, Inject ,Input,OnInit} from '@angular/core';


@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
    
  @HostBinding("style.top") y = "0px"
  @HostBinding("style.left") x = "0px"
  @HostBinding("style.visibility") visibility = "hidden"
  @Input() @HostBinding("style.width") width = "300px"
 
  constructor() { }
 
  open(e:MouseEvent) {
    this.x = `${e.clientX}px`
    this.y = `${e.clientY}px`
    console.log(`x ${this.x}   y ${this.y}`);
    this.visibility = "visible"
 
    e.stopPropagation()
  }
 
  close() {
    this.visibility = "hidden"
  }
 
  @HostListener('document:click')
  public onDocumentClick() {
    if (this.visibility === "visible") {
      this.close()
    }
  }

}
