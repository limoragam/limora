import { Component } from '@angular/core';

@Component({
  selector: 'app-content-portfolio',
  templateUrl: './content-portfolio.component.html',
  styleUrls: ['./content-portfolio.component.scss']
})
export class ContentPortfolioComponent {
  hoverScrollDistancePerSec = 600;
//  arrowTranslateLength = 0;
  arrowTranslateString = "translateY(40px)";

  resizeTimeout:any;

  ngOnInit() {
    this.calcArrowTranslation();
  }

  scroll(elementId:string, direction:string) {
    let projectWindow = $("#" + elementId);

    // Stop animation on mouse leave
    if(direction!=='start' && direction!=='end') {
      projectWindow.stop();
      return;
    }

    // Start animation on mouse enter
    let currentDistanceFromStart = projectWindow.scrollLeft(); // Where is project currently scrolled to?
    // Direction start
    if(direction==='start') {
      let targetPosition = 0;
      let duration = (currentDistanceFromStart / this.hoverScrollDistancePerSec) * 1000; // (travelling distance / speed) * ms factor
      projectWindow.animate({
//        scrollTop:targetPosition
        scrollLeft:targetPosition
      }, duration, 'linear');
    // Direction end
    } else {
//      let targetPosition = projectWindow.prop("scrollHeight") - projectWindow.prop("clientHeight"); // Bottom of text minus window height
      let targetPosition = projectWindow.prop("scrollWidth") - projectWindow.prop("clientLeft"); // Left of text minus window left
      let duration = ((targetPosition - currentDistanceFromStart) / this.hoverScrollDistancePerSec) * 1000; // Travelling distance is target distance minus what's been travelled so far
      projectWindow.animate({
//        scrollTop:targetPosition
        scrollLeft:targetPosition
      }, duration, 'linear');
    }
  }

  calcArrowTranslation() {
    let arrowTranslateLength = ($("img").height() - $(".arrow").height())/2;
    this.arrowTranslateString = "translateY(" + arrowTranslateLength + "px)";
  }

  onResize(event:Event) {
    // Arrows offsets change when window size changes
    // Set a timeout for event to finish before calculating. 
    // If event was fired before timeout was finished, clear timeout and set another
    // if(this.resizeTimeout) {
    //   clearTimeout(this.resizeTimeout);
    // }
    // this.resizeTimeout = setTimeout(()=>{
    //   this.calcArrowTranslation();
    // }, 50);
    this.calcArrowTranslation();
  }
}
