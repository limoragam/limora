import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-visual-about',
  templateUrl: './visual-about.component.html',
  styleUrls: ['./visual-about.component.scss'],
  animations: [
    trigger('rotateAll', [
      state('hide', style({
        opacity:0.3,
      })),
      state('show', style({
        opacity:1,
      })),
      transition('hide => show', animate("600ms 50ms ease", keyframes([
        style({offset:0, opacity:0.3, transform:'rotate(0)'}),
//        style({offset:0.5, opacity:0.5, transform:'rotate(180deg)'}),
        style({offset:1, opacity:1, transform:'rotate(360deg)'}),
      ]))),
    ])
  ]
})
export class VisualAboutComponent implements OnInit {
  allVisibility = 'hide';

  ngOnInit() {
    setTimeout(()=>{
      this.allVisibility = 'show';
    }, 4000);
  }

}
