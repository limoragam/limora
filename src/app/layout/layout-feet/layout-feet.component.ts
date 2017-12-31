import { Component, ViewChild, ElementRef } from '@angular/core';
import { TimelineLite, Cubic } from 'gsap';

@Component({
  selector: 'app-layout-feet',
  templateUrl: './layout-feet.component.html',
  styleUrls: ['./layout-feet.component.scss']
})
export class LayoutFeetComponent {
  @ViewChild('layoutContent') layoutContent:ElementRef;

  ngAfterViewInit() {
    this.stretchText();
  }

  stretchText() {
    let timeline = new TimelineLite();
    timeline.delay(2);
    // timeline.to(this.layoutContent.nativeElement, 0.3, { attr: {opacity:1}, ease: Cubic.easeInOut});
    // new TimelineLite().from(this.seeMyFeet.nativeElement, 0.3, {attr:{opacity:0, 'letter-spacing':0.3}})
    //                   .to(this.seeMyFeet.nativeElement, 0.3, {attr:{opacity:0.5, 'letter-spacing':0.6}})
    //                   .to(this.seeMyFeet.nativeElement, 0.3, {attr:{opacity:1, 'letter-spacing':0.3}});
  }
}
