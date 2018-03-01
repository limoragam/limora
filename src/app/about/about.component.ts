import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      // state('true', style({
      //   opacity:1,
      // })),
      // state('false', style({
      //   opacity:0,
      // })),
      transition(':enter', [
        style({opacity:0, transform:'translateY(-3vh)'}),
        animate("300ms 100ms", style({opacity:1, transform:'translateY(0)'})) 
      ]),
      transition(':leave', [
        animate(500, style({opacity:0, transform:'translateY(-5vh)'})) 
      ])
    ]),
  ]
})
export class AboutComponent {
  @Input() show = false;
  showPhoto = false;
  
  constructor(private layoutService:LayoutService) {}

  peekAtPhoto(event:Event) {
    this.showPhoto = true;
    setTimeout(()=>{ this.showPhoto=false }, 1000);
    return false;
  }
}

