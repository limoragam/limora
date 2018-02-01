import { Component, ViewChild } from '@angular/core';
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
export class LayoutComponent {
  @ViewChild(VisualDragonComponent) visualDragonComponent:VisualDragonComponent;
  @ViewChild(VisualMushroomComponent) visualMushroomComponent:VisualMushroomComponent;
  @ViewChild(AboutComponent) aboutComponent:AboutComponent;
  mushroomStyle = this.layoutService.getOrientation()==='landscape' ? 
    {'bottom':'5vh', 'left':0} : {'bottom':'7vh', 'right':0};
  continueAnimatingMushroom = false;

  constructor(public layoutService:LayoutService) { }

  ngAfterViewInit() {
    this.aboutComponent.show = false;
    this.animateImages();
  }

  animateImages() {
    let duration = this.layoutService.getOrientation()==='landscape' ? 2 : 1.5;
    let delay = this.layoutService.getOrientation()==='landscape' ? duration/2 : duration/2 - 0.5;
    let slideoutDelay = "+=" + delay;
    let wrapperWidth = $(".wrapper").width() * -1;
    let images = $(".dynamic");
    for (let i = 0; i < images.length; i++) {
      let tl = new TimelineLite({ delay: i * duration, ease: Cubic.easeInOut });
      tl.to(images[i], duration, { x: 0 });
      if (i === images.length - 1) {
        tl.call(()=>{
          this.visualDragonComponent.doAnimation();
          this.continueAnimatingMushroom = true;
          this.animateMushroom();
        });
      } else {
        tl.to(images[i], duration, { x: wrapperWidth }, slideoutDelay);
      }
    }
  }

  animateMushroom() {
    if(!this.continueAnimatingMushroom) {
      return;
    }

    let delay = (Math.random()/2 + 0.7) * 10000;

    this.mushroomStyle['transform'] = "scale(1.1) translateY(-0.3em)";
    setTimeout(()=>{
      this.mushroomStyle['transform'] = "scale(1) translateY(0)";
      setTimeout(()=>{
        this.animateMushroom();
      },delay);
    },300);
  }

  onMushroomClick() {
    this.aboutComponent.show = true
    this.continueAnimatingMushroom = false;
  }
}
