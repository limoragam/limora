import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from './../gallery/gallery.service';
import { LayoutService } from './../layout/layout.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() groupId:string;
  @Input() currentSlide = 0;
  slideWidth = 0;
  numberOfSlides = 0;

  slideshowDimensions = {
    width:"",
    height:"",
  };

  background = {
    position:"absolute",
    left:0,
    top:0,
    width:"",
    height:"",
    'background-repeat':"no-repeat",
    'background-image':"",
    'background-position':"",
  };

  constructor(public galleryService:GalleryService, public layoutService:LayoutService) {}

  ngOnInit() {
    this.setSlideshowDimensions();
    this.numberOfSlides = this.galleryService.getNumberOfImagesInGroup(this.groupId);
    this.slideWidth = this.layoutService.getOrientation()==='landscape' ? 600 : 320;
    this.setBackground();
  }

  setBackground() {
    this.background.width = 100*this.numberOfSlides + "%";
    this.background.height = this.layoutService.getOrientation()==='landscape' ? "400px" : "600px";
    this.centerCurrentSlide();
    this.buildBackgroundImage();
  }

  setSlideshowDimensions() {
    this.slideshowDimensions.width = this.layoutService.getOrientation()==='landscape' ? "600px" : "300px";
    this.slideshowDimensions.height = this.layoutService.getOrientation()==='landscape' ? "400px" : "480px";
  }

  centerCurrentSlide() {
    let positionString = "";
    for(let i=0; i<this.numberOfSlides; i++) {
      positionString += (i-this.currentSlide)*this.slideWidth + "px 0";
      if(i<this.numberOfSlides-1) {
        positionString += ", ";
      }
    }
    this.background["background-position"] = positionString;
  }

  buildBackgroundImage() {
    let backgroundImageString = "";
    let images = this.galleryService.getImages(this.groupId);
    let orientation = this.layoutService.getOrientation();
    for(let i=0; i<this.numberOfSlides; i++) {
      backgroundImageString += "url('" + images[i][orientation] + "')";
      if(i<this.numberOfSlides-1) {
        backgroundImageString += ", ";
      }
    }
    this.background["background-image"] = backgroundImageString;
  }

  setCurrentSlide(slide:number) {
    this.currentSlide = slide;
    this.centerCurrentSlide();
  }

  slideNext() {
    this.currentSlide++;
    this.currentSlide = this.currentSlide%this.numberOfSlides;
    this.centerCurrentSlide();
  }

  slidePrev() {
    this.currentSlide--;
    this.currentSlide = (this.currentSlide+this.numberOfSlides)%this.numberOfSlides;
    this.centerCurrentSlide();
  }

  onKeyup(event:KeyboardEvent) {
    if (event.keyCode === 37) { // Catch left arrow key
      this.slidePrev();
    }
    if (event.keyCode === 39) { // Catch right arrow key
      this.slideNext();
    }
  }
}
