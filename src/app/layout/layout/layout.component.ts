import { Component, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { TweenLite, Cubic, TimelineLite } from 'gsap';
import { VisualMushroomComponent } from './../../visuals/visual-mushroom/visual-mushroom.component';
import { VisualDragonComponent } from '../../visuals/visual-dragon/visual-dragon.component';
import { AboutComponent } from './../../about/about.component';
import { LayoutService } from './../layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
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
export class LayoutComponent implements AfterViewInit {
  @ViewChild(VisualDragonComponent) visualDragonComponent:VisualDragonComponent;
  @ViewChild(VisualMushroomComponent) visualMushroomComponent:VisualMushroomComponent;
  @ViewChild(AboutComponent) aboutComponent:AboutComponent;

  mushroomStyle = this.layoutService.getOrientation()==='landscape' ? 
    {'bottom':'5vh', 'left':0} : {'bottom':0, 'right':0};
  flowState = 'pending';  // pending, slide-in, mushroom, stop
  showIntroducing = true;

  constructor(public layoutService:LayoutService) { }

  ngAfterViewInit() {
    window.addEventListener("orientationchange", ()=>{
      this.resetLayout();
    }, false);

    this.aboutComponent.show = false;
    let introducing = $('.introducing');
    let timeline = new TimelineLite({ delay: 0.5, ease: Cubic.easeInOut });
    timeline.to(introducing, 0.4, {opacity:1})
      .to(introducing, 0.7, {opacity:0}, "+=2");
    timeline.call(()=>{
      this.animateImages();
    })
  }

  onResize(event:Event) {
    this.resetLayout();
  }

  resetLayout() {
    this.setMushroomPosition();
    this.setImagesPosition();
  }

  setMushroomPosition() {
    this.mushroomStyle = this.layoutService.getOrientation()==='landscape' ? 
      {'bottom':'5vh', 'left':0} : {bottom:0, 'right':0};
  }

  setImagesPosition() {
    if(this.flowState==='mushroom' || this.flowState==='stop') {
      let windowWidth =  window.innerWidth;
      let xPosition = (this.layoutService.getOrientation()==='landscape') ? windowWidth * -1 : windowWidth * -2;
      $(".booby").css('transform', 'translateX('+ xPosition +'px)');
    }
  }

  animateImages() {
    let duration = this.layoutService.getOrientation()==='landscape' ? 2 : 1.5;
    let delay = this.layoutService.getOrientation()==='landscape' ? duration/2 : duration/2 - 0.5;
    let slideoutDelay = "+=" + delay;
    let wrapperWidth = $(".wrapper").width() * -1;
    let images = $(".dynamic");
    this.flowState = 'slide-in';
    for (let i = 0; i < images.length; i++) {
      let tl = new TimelineLite({ delay: i * duration, ease: Cubic.easeInOut });
      tl.to(images[i], duration, { x: 0 });
      if (i === images.length - 1) {
        tl.call(()=>{
          this.visualDragonComponent.doAnimation();
          if(this.flowState==='slide-in') {
            this.flowState = 'mushroom';
          }
          this.animateMushroom();
        });
      } else {
        tl.to(images[i], duration, { x: wrapperWidth }, slideoutDelay);
      }
    }
  }

  animateMushroom() {
    if(this.flowState!=='mushroom') {
      return;
    }

    let delay = (Math.random()*5 + 3);

    let mushroom = $('.mushroom');
    let click = $('.click');
    let timeline = new TimelineLite({ delay: delay, ease: Cubic.easeInOut });
    timeline.to(mushroom, 0.2, {scaleY:1.15, scaleX:1.05, y:-10})
      .to(mushroom, 0.1, {scale:1, y:0}, "+=0.2")
      .to(click, 0.2, {opacity:1})
      .to(click, 0.6, {opacity:0}, "+=0.8");
    timeline.call(()=>{
      this.animateMushroom();
    })
  }
}
