import { Component, ViewChild, ElementRef } from '@angular/core';
import { TimelineLite, Cubic } from 'gsap';
import { VisualDragonService } from './visual-dragon.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-visual-dragon',
  templateUrl: './visual-dragon.component.html',
  styleUrls: ['./visual-dragon.component.scss'],
  providers: [VisualDragonService]
})
export class VisualDragonComponent {
  @ViewChild('line01') line01:ElementRef;
  @ViewChild('line02') line02:ElementRef;
  @ViewChild('line03') line03:ElementRef;
  @ViewChild('line04') line04:ElementRef;
  @ViewChild('line05') line05:ElementRef;
  @ViewChild('line06') line06:ElementRef;
  @ViewChild('line07') line07:ElementRef;

  @ViewChild('smoke01') smoke01:ElementRef;
  @ViewChild('smoke02') smoke02:ElementRef;
  @ViewChild('smoke03') smoke03:ElementRef;

  constructor(public visualDragonService:VisualDragonService, public layoutService:LayoutService) { }

  doAnimation() {
    this.blink(true);
    this.smoke(true);
  }

  blink(repeat:boolean) {
    let delay = repeat ? (Math.random() * 5) + 5 : 2;
    let timeline = new TimelineLite();
    timeline.delay(delay);

    this.visualDragonService.blinkSeries.forEach(blinkStage => {
      timeline.to(this.line01.nativeElement, 0.1, { attr: {d:this.visualDragonService.eyeVisuals.line01morph[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.line02.nativeElement, 0.1, { attr: {d:this.visualDragonService.eyeVisuals.line02morph[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.line03.nativeElement, 0.1, { attr: {d:this.visualDragonService.eyeVisuals.line03morph[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.line04.nativeElement, 0.1, { attr: {d:this.visualDragonService.eyeVisuals.line04morph[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.line05.nativeElement, 0.1, { attr: {d:this.visualDragonService.eyeVisuals.line05morph[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.line06.nativeElement, 0.1, { attr: {d:this.visualDragonService.eyeVisuals.line06morph[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
      timeline.to(this.line07.nativeElement, 0.1, { attr: {d:this.visualDragonService.eyeVisuals.line07morph[blinkStage.visualIndex]}, ease: Cubic.easeInOut}, blinkStage.label);
    });

    if(repeat) {
      timeline.call(()=>{
        this.blink(true);
      });
    }
  }

  smoke(repeat:boolean) {
    this.smokeWisp(repeat,0);
    this.smokeWisp(repeat,1);
    this.smokeWisp(repeat,2);
  }

  smokeWisp(repeat:boolean, wispIndex:number) {
    let delay = repeat ? (Math.random() * 5) + 8 : 2;
    let timeline = new TimelineLite();
    timeline.delay(delay);
    let smokeWispVisuals = this.visualDragonService.smokeWispVisuals[wispIndex];
    let smokeElement:ElementRef;
    switch(wispIndex) {
      case 0:
        smokeElement = this.smoke01;
        break;
      case 1:
        smokeElement = this.smoke02;
        break;
      case 2:
        smokeElement = this.smoke03;
        break;
    }

    this.visualDragonService.smokeSeries.forEach((smokeStage,index) => {
      timeline.to(smokeElement.nativeElement, 0.02+index/10, { attr: {
        d:smokeWispVisuals[smokeStage.visualIndex],
        opacity:smokeStage.opacity,
      }, 
      ease: Cubic.easeInOut}, smokeStage.label);
    });

    if(repeat) {
      timeline.call(()=>{
        this.smokeWisp(true,wispIndex);
      });
    }
  }
}
