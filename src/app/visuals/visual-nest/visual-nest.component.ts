import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cubic, TimelineLite } from 'gsap';
import { VisualNestService } from './visual-nest.service';

@Component({
  selector: 'app-visual-nest',
  templateUrl: './visual-nest.component.html',
  styleUrls: ['./visual-nest.component.scss'],
  providers: [VisualNestService]
})
export class VisualNestComponent implements OnInit {
  @ViewChild('leftEye') leftEye: ElementRef;
  @ViewChild('leftPupil') leftPupil: ElementRef;
  @ViewChild('rightEye') rightEye: ElementRef;
  @ViewChild('rightPupil') rightPupil: ElementRef;

  currentVisualIndex = this.visualNestService.visualStart;
  currentVisual = this.visualNestService.visualsNest[this.currentVisualIndex];

  constructor(public visualNestService: VisualNestService) { }

  ngOnInit() {
    this.blink();
    setTimeout(() => {
      this.changeVisual(this.currentVisualIndex + 1, this.visualNestService.visualsNest.length - 1);
    }, 3000);
  }

  blink() {
    if (this.currentVisual.eyes.leftEye.length < 3) {
      return;
    }

    let timeline = new TimelineLite();
    timeline.delay(2);

    this.visualNestService.blinkSeries.forEach(blinkStage => {
      timeline.to(this.leftEye.nativeElement, 0.1, { attr: {d:this.currentVisual.eyes.leftEye[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.leftPupil.nativeElement, 0.1, { attr: {d:this.currentVisual.eyes.leftPupil[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.rightEye.nativeElement, 0.1, { attr: {d:this.currentVisual.eyes.rightEye[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.rightPupil.nativeElement, 0.1, { attr: {d:this.currentVisual.eyes.rightPupil[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
    });
  }

  changeVisual(nextVisualIndex: number, lastVisualIndex: number) {
    if (nextVisualIndex > lastVisualIndex) {
      this.blink();
      return;
    }

    setTimeout(() => {
      this.currentVisualIndex = nextVisualIndex;
      this.currentVisual = this.visualNestService.visualsNest[this.currentVisualIndex];
      this.changeVisual(nextVisualIndex + 1, lastVisualIndex);
    }, 100);
  }
}
