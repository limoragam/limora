import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from './../gallery/gallery.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() groupId:string;
  @Input() currentSlide = 0;
  slideWidth = 600;
  numberOfSlides = 0;
  background = {
    position:"absolute",
    left:0,
    top:0,
    height:"400px",
    width:"",
    'background-repeat':"no-repeat",
    'background-image':"",
    'background-position':"",
  };

  constructor(public galleryService:GalleryService) {}

  ngOnInit() {
    this.numberOfSlides = this.galleryService.getNumberOfImagesInGroup(this.groupId);
    this.setBackground();
  }

  setBackground() {
    this.background.width = 100*this.numberOfSlides + "%";
    this.centerCurrentSlide();
    this.buildBackgroundImage();
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
    for(let i=0; i<this.numberOfSlides; i++) {
      backgroundImageString += "url('" + images[i]["fullsize"] + "')";
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
