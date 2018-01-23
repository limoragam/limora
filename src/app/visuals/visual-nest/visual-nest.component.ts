import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { Cubic, TimelineLite } from 'gsap';
import { VisualNestService } from './visual-nest.service';

@Component({
  selector: 'app-visual-nest',
  templateUrl: './visual-nest.component.html',
  styleUrls: ['./visual-nest.component.scss'],
  providers: [VisualNestService]
})
export class VisualNestComponent {
  @ViewChild('leftEye') leftEye: ElementRef;
  @ViewChild('leftPupil') leftPupil: ElementRef;
  @ViewChild('rightEye') rightEye: ElementRef;
  @ViewChild('rightPupil') rightPupil: ElementRef;
  @ViewChild('booby') booby: ElementRef;

  currentVisualIndex = this.visualNestService.visualStart;
  currentVisual = this.visualNestService.visualsNest[this.currentVisualIndex];
  stop = false;

  constructor(public visualNestService: VisualNestService) { }

  blink(repeat:boolean) {
    if (this.currentVisual.eyes.leftEye.length < 3 || this.stop) {
      return;
    }

    let delay = repeat ? (Math.random() * 5) + 3 : 2;
    let timeline = new TimelineLite();
    timeline.delay(delay);

    this.visualNestService.blinkSeries.forEach(blinkStage => {
      timeline.to(this.leftEye.nativeElement, 0.1, { attr: {d:this.currentVisual.eyes.leftEye[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.leftPupil.nativeElement, 0.1, { attr: {d:this.currentVisual.eyes.leftPupil[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.rightEye.nativeElement, 0.1, { attr: {d:this.currentVisual.eyes.rightEye[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.rightPupil.nativeElement, 0.1, { attr: {d:this.currentVisual.eyes.rightPupil[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
    });

    if(repeat) {
      timeline.call(()=>{
        this.blink(true);
      });
    }
  }

  changeVisual(nextVisualIndex: number, lastVisualIndex: number) {
    if (nextVisualIndex > lastVisualIndex) {
      this.blink(true);
      return;
    }

    setTimeout(() => {
      this.currentVisualIndex = nextVisualIndex;
      this.currentVisual = this.visualNestService.visualsNest[this.currentVisualIndex];
      this.changeVisual(nextVisualIndex + 1, lastVisualIndex);
    }, 100);
  }

  doAnimation() {
    this.blink(false);
    setTimeout(() => {
      this.changeVisual(this.currentVisualIndex + 1, this.visualNestService.visualsNest.length - 1);
    }, 3000);
  }

  onResize(event:Event) {
    this.visualNestService.setDimensions();
  }
}
