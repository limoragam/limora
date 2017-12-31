import { Component, ViewChild, ElementRef } from '@angular/core';
import { TimelineLite, Cubic } from 'gsap';
import { VisualEggService } from './visual-egg.service';

@Component({
  selector: 'app-visual-egg',
  templateUrl: './visual-egg.component.html',
  styleUrls: ['./visual-egg.component.scss'],
  providers: [VisualEggService]
})
export class VisualEggComponent {
  @ViewChild('menuTop') menuTop:ElementRef;
  @ViewChild('menuBottom') menuBottom:ElementRef;
  cracked = false;

  constructor(public visualEggService:VisualEggService) { }

  currentVisualIndex = 0;

  changeVisual(nextVisualIndex:number, lastVisualIndex:number) {
    if (nextVisualIndex > lastVisualIndex) {
      this.splitEgg();
      return;
    }

    setTimeout(() => {
      this.currentVisualIndex = nextVisualIndex;
      this.changeVisual(nextVisualIndex + 1, lastVisualIndex);
    }, 100);
  }

  crackEgg() {
    let timeline = new TimelineLite();
    timeline.to(this.menuTop.nativeElement, 0.3, { attr: {opacity:0}, ease: Cubic.easeInOut},0);
    timeline.to(this.menuBottom.nativeElement, 0.3, { attr: {opacity:0}, ease: Cubic.easeInOut},0);

    this.changeVisual(this.currentVisualIndex+1, this.visualEggService.egg.menu.menuMiddle.d.length-1);
  }

  splitEgg() {
    this.cracked = true;
  }
}
