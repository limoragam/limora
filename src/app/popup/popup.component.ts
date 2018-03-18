import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { GalleryService } from './../gallery/gallery.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
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
export class PopupComponent {
  @Input() groupId = "";
  @Input() imageIndex = 0;
  @Input() type = "";
  @Output() closeMe = new EventEmitter<any>();
  // @HostListener('document:click', ['$event']) clickedOutside($event) {
  //   this.closeMe.emit();
  // }

  constructor(public galleryService:GalleryService) {}

  ngOnInit() {
    setTimeout(() => {
      this.setVerticalPosition();
    }, 10);
  }

  setVerticalPosition() {
    let verticalMove = (window.innerHeight - $(".footer").height() - $(".popup").height())/2 + "px";
    $(".popup").css('top', verticalMove);
  }

  onKeyup(event:KeyboardEvent) {
    if (event.keyCode === 27) { // Catch escape key
      this.closeMe.emit();
    }
  }

  onXClick() {
    this.closeMe.emit();
  }

  // onClickOnPopup($event: Event) {
  //   $event.preventDefault();
  //   $event.stopPropagation();  // <- that will stop propagation on lower layers
  //   console.log("CLICKED INSIDE, MENU WON'T HIDE");
  // }
}
