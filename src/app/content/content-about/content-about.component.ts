import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-content-about',
  templateUrl: './content-about.component.html',
  styleUrls: ['./content-about.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('true', style({
        opacity:0.3,
      })),
      state('false', style({
        opacity:1,
      })),
      // transition(':enter', [
      //   style({opacity:0}),
      //   animate(400, style({opacity:1})) 
      // ]),
      transition(':leave', [
        animate(500, style({opacity:0})) 
      ])
    ]),
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
    trigger('fadeInDelayed', [
      state('true', style({
        opacity:1,
      })),
      state('false', style({
        opacity:0,
      })),
      transition(':enter', [
        style({opacity:0}),
        animate("500ms 1500ms", style({opacity:1})) 
      ]),
    ])
  ]
})
export class ContentAboutComponent {
  flags = {
    rain:false,
    noise:false,
    color:false,
    drink:false,
    hour:false,
    word:false,
    job:false,
  }

  onClick(flagName:string, scroll:boolean) {
    this.flags[flagName] = true;
    if(scroll) {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }
}
