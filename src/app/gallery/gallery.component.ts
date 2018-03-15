import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from './gallery.service';
//import { VisualXComponent } from '../visuals/visual-x/visual-x.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity:0}),
        animate("300ms 100ms", style({opacity:1})) 
      ]),
      transition(':leave', [
        animate(500, style({opacity:0})) 
      ])
    ]),
  ]
})
export class GalleryComponent {
//  @ViewChild(VisualXComponent) visualXComponent:VisualXComponent;
  showPopup = false;
  currentGroup = "";
  currentSlide = 0;

  constructor(public galleryService:GalleryService, public router:Router) {}

  onThumbnailClick(groupId:string, imageIndex:number) {
    this.currentGroup = groupId;
    this.currentSlide = imageIndex;
    this.showPopup = true;
  }

  onXClick() {
    this.showPopup = false;
    this.router.navigate(['/gallery']);
  }
}
