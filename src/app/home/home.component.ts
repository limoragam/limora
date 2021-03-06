import { Component, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { TweenLite, Cubic, TimelineLite } from 'gsap';
import { VisualDragonComponent } from '../visuals/visual-dragon/visual-dragon.component';
import { LayoutService } from '../layout/layout.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('true', style({
        opacity:1,
      })),
      state('false', style({
        opacity:0,
      })),
      transition(':enter', [
        style({opacity:0}),
        animate("500ms 300ms", style({opacity:1})) 
      ]),
      // transition(':leave', [
      //   animate(400, style({opacity:0})) 
      // ])
    ]),
  ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(VisualDragonComponent) visualDragonComponent:VisualDragonComponent;

  backgroundImage = this.layoutService.getOrientation()==='landscape' ? 
    "url('/assets/images/backgroundShop.svg')" : "url('/assets/images/backgroundShopPortrait.svg')";

  constructor(public layoutService:LayoutService, public homeService:HomeService) { }

  ngAfterViewInit() {
    window.addEventListener("orientationchange", ()=>{
      this.resetLayout();
    }, false);

    this.resetLayout();
    this.animate();
  }

  onResize(event:Event) {
    this.resetLayout();
  }

  resetLayout() {
    this.setImagesPosition();
    this.setBackgroundImage();
  }

  setBackgroundImage() {
    this.backgroundImage = this.layoutService.getOrientation()==='landscape' ? 
    "url('/assets/images/backgroundShop.svg')" : "url('/assets/images/backgroundShopPortrait.svg')";
  }

  setImagesPosition() {
    if(this.homeService.flowState==='stop') {
      let windowWidth =  window.innerWidth;
      let xPosition = (this.layoutService.getOrientation()==='landscape') ? windowWidth * -1 : windowWidth * -2;
      $(".booby").css('transform', 'translateX('+ xPosition +'px)');
      $(".dragon").css('transform', 'translateX(0)');
    }
  }

  animate() {
    switch(this.homeService.flowState) {
      case 'pending':
        this.animateIntroducing();
        break;
      case 'slide-in':
        this.animateImages();
        break;
      case 'stop':
        this.visualDragonComponent.doAnimation();
        break;
    }
  }

  animateIntroducing() {
    if(this.homeService.flowState==='pending') {
      let introducing = $('.introducing');
      let timeline = new TimelineLite({ delay: 0.5, ease: Cubic.easeInOut });
      timeline.to(introducing, 0.4, {opacity:1})
        .to(introducing, 0.7, {opacity:0}, "+=2");
      timeline.call(()=>{
        this.homeService.flowState = 'slide-in';
        this.animateImages();
      })
    }
  }

  animateImages() {
    if(this.homeService.flowState==='slide-in') {
      let duration = this.layoutService.getOrientation()==='landscape' ? 2 : 1.5;
      let delay = this.layoutService.getOrientation()==='landscape' ? duration/2 : duration/2 - 0.5;
      let slideoutDelay = "+=" + delay;
      let wrapperWidth = $(".wrapper").width() * -1;
      let images = $(".dynamic");
      for (let i = 0; i < images.length; i++) {
        let tl = new TimelineLite({ delay: i * duration, ease: Cubic.easeInOut });
        tl.to(images[i], duration, { x: 0 }); // slide in
        if (i === images.length - 1) {
          tl.call(()=>{
            this.homeService.flowState = 'stop';
            this.visualDragonComponent.doAnimation();
          });
        } else {
          tl.to(images[i], duration, { x: wrapperWidth }, slideoutDelay); // slide out
        }
      }
    }
  }
}
