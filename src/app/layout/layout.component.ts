import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  mainHeight = "85vh";

  ngAfterViewInit() {
    this.setMainHeight();
  }

  setMainHeight() {
    // Set Timeout is a sort of patch, so that there is a change triggered, child updating is allowed
    // Will prevent ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(()=>{
      this.mainHeight = window.innerHeight - $(".footer").height() + "px";
    });
  }

  onResize(event:Event) {
    this.setMainHeight();
  }
}