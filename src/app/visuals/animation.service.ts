import { Injectable, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AnimationService {
    // animationDoneEvent = new Subject();

    // changeVisual(element:ElementRef, nextVisualIndex: number, lastVisualIndex: number, timeout:number) {
    //     if (nextVisualIndex > lastVisualIndex) {
    //       this.animationDoneEvent.next();
    //       return;
    //     }
    
    //     setTimeout(() => {
    //       this.currentVisualIndex = nextVisualIndex;
    //       this.currentVisual = this.visualNestService.visualsNest[this.currentVisualIndex];
    //       this.changeVisual(nextVisualIndex + 1, lastVisualIndex);
    //     }, timeout);
    //   }
    }