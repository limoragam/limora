import { Component } from '@angular/core';
import { LayoutService } from './../layout.service';
import { TweenLite, Cubic, TimelineLite } from 'gsap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  frameStyle = {opacity:0};

  constructor(public layoutService:LayoutService) { }

  ngAfterViewInit() {
    this.animateImages();
  }

  animateImages() {
    let wrapperWidth = $(".wrapper").width() * -1;
    let images = $(".image-wrapper");
    for (let i = 0; i < images.length; i++) {
      let tl = new TimelineLite({ delay: i * 2, ease: Cubic.easeInOut });
      tl.to(images[i], 2, { x: 0 });
      if (i < images.length - 1) {
        tl.to(images[i], 2, { x: wrapperWidth }, "+=1");
      } else {

      }
    }

  }

}
