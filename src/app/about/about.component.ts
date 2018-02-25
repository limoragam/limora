import { Component, Input, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      // state('true', style({
      //   opacity:1,
      // })),
      // state('false', style({
      //   opacity:0,
      // })),
      transition(':enter', [
        style({opacity:0, transform:'translateY(-3vh)'}),
        animate("300ms 100ms", style({opacity:1, transform:'translateY(0)'})) 
      ]),
      transition(':leave', [
        animate(500, style({opacity:0, transform:'translateY(-5vh)'})) 
      ])
    ]),
  ]
})
export class AboutComponent implements AfterViewInit {
  @Input() show = false;
  showPhoto = false;
  
  contentFlags = {
    selfPortrait:true,
    photo:true,
    silliness:true,
    army:true,
    banana:true,
  }

  scrollTargetOffsets = [];
  paddingFromTargetWindowTop = 0;
  resizeTimeout:any;

  constructor(private layoutService:LayoutService) {}

  ngAfterViewInit() {
    this.collectScrollTargetOffsets();
    let scrollTargetsWindowHeight = $(".wrapper-about");
    this.paddingFromTargetWindowTop = scrollTargetsWindowHeight.prop("clientHeight") / 15;  // this so scroll target is centered in window
  }

  onResize(event:Event) {
    // Target offsets change when window size changes
    // Set a timeout for event to finish before calculating. 
    // If event was fired before timeout was finished, clear timeout and set another
    if(this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(()=>{
      this.collectScrollTargetOffsets();
    }, 500);
  }

  collectScrollTargetOffsets() {
    let targets = $("[id*='target-']").toArray();
    for(let target of targets) {
      let targetName = $(target).attr("id");
      let targetOffset = $(target).prop("offsetTop");
      this.scrollTargetOffsets[targetName] = targetOffset;
    }
  }

  peekAtPhoto(event:Event) {
    this.showPhoto = true;
    setTimeout(()=>{ this.showPhoto=false }, 1000);
    return false;
  }
}

