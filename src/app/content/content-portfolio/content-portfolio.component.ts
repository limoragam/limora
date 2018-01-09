import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../../layout/layout.service';

@Component({
  selector: 'app-content-portfolio',
  templateUrl: './content-portfolio.component.html',
  styleUrls: ['./content-portfolio.component.scss']
})
export class ContentPortfolioComponent implements OnInit {
  hoverScrollDistancePerSec = 600;
  arrowTranslateString = "translateY(40px)";
//  resizeTimeout:any;

  constructor(public layoutService:LayoutService) {}

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
        scrollLeft:targetPosition
      }, duration, 'linear');
    // Direction end
    } else {
      let targetPosition = projectWindow.prop("scrollWidth") - projectWindow.prop("clientLeft"); // Left of text minus window left
      let duration = ((targetPosition - currentDistanceFromStart) / this.hoverScrollDistancePerSec) * 1000; // Travelling distance is target distance minus what's been travelled so far
      projectWindow.animate({
        scrollLeft:targetPosition
      }, duration, 'linear');
    }
  }

  onHold() {
    console.log("holding");
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
