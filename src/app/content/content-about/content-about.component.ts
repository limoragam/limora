import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-content-about',
  templateUrl: './content-about.component.html',
  styleUrls: ['./content-about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity:0}),
        animate(400, style({opacity:1})) 
      ]),
      // transition(':leave', [
      //   animate(400, style({opacity:0})) 
      // ])
    ])
  ]
})
export class ContentAboutComponent {
  flags = {
    fna:false,
    word:false,
    hour:false,
    animation:false,
    laugh:false,
    faq:false,
  }
}
