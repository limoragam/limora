import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LayoutService } from './../layout/layout.service';

@Component({
  selector: 'app-title-limoragam',
  templateUrl: './title-limoragam.component.html',
  styleUrls: ['./title-limoragam.component.scss'],
  animations: [
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
  ]
})
export class TitleLimoragamComponent {
  @Input() type="main";

  constructor(public layoutService:LayoutService) {}
}
