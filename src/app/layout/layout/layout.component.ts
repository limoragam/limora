import { VisualMushroomComponent } from './../../visuals/visual-mushroom/visual-mushroom.component';
import { NavComponent } from './../../common/nav/nav.component';
import { Component, ViewChild } from '@angular/core';
import { LayoutService } from './../layout.service';
import { TweenLite, Cubic, TimelineLite } from 'gsap';
import { VisualDragonComponent } from '../../visuals/visual-dragon/visual-dragon.component';
import { trigger, transition, style, animate, state } from '@angular/animations';

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
  showNav = false;

  constructor(public layoutService:LayoutService) { }

  ngAfterViewInit() {
    this.animateImages();
  }

  animateImages() {
    let duration = 2;
    let wrapperWidth = $(".wrapper").width() * -1;
    let images = $(".dynamic");
    for (let i = 0; i < images.length; i++) {
      let tl = new TimelineLite({ delay: i * duration, ease: Cubic.easeInOut });
      tl.to(images[i], duration, { x: 0 });
      if (i === images.length - 1) {
        tl.call(()=>{
          this.visualDragonComponent.doAnimation();
          this.visualMushroomComponent.show = true;
        });
      } else {
        tl.to(images[i], duration, { x: wrapperWidth }, "+=1");
      }
    }
  }
}
