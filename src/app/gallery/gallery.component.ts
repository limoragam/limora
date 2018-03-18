import { Component, ViewChild, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { GalleryService } from './gallery.service';
import { LayoutService } from './../layout/layout.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  showPopup = false;
  popupType = "";
  currentGroup = "";
  currentSlide = 0;

  constructor(public galleryService:GalleryService, public router:Router, public layoutService:LayoutService) {}

  ngOnInit() {
    this.popupType = this.layoutService.getOrientation()==='landscape' && window.innerWidth>=710 ? 'slider' : 'singleImage';
  }

  onThumbnailClick(groupId:string, imageIndex:number) {
    if(this.showPopup) {
      this.closePopup();
      setTimeout(()=>{
        this.openPopup(groupId, imageIndex);
      },10);
    }
    else {
      this.openPopup(groupId, imageIndex);
    }
  }

  openPopup(groupId:string, imageIndex:number) {
    this.currentGroup = groupId;
    this.currentSlide = imageIndex;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.router.navigate(['/gallery']);
  }
}
