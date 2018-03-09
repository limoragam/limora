import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { LayoutService } from './../layout/layout.service';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity:0, transform:'translateY(-3vh)'}),
        animate("300ms 100ms", style({opacity:1, transform:'translateY(0)'})) 
      ]),
      transition(':leave', [
        animate(500, style({opacity:0, transform:'translateY(3vh)'})) 
      ])
    ]),
  ]
})
export class NavigationComponent {
  @Output() aboutClicked = new EventEmitter<any>();
  phoneClicked = false;
  show = this.layoutService.getOrientation()==='landscape';

  constructor(public layoutService:LayoutService, public navigationService:NavigationService) {}

  onAboutClick() {
    this.aboutClicked.emit();
  }

  onItemClicked(itemName:string) {
    let returnVal = true;

    if(itemName==='phone') {
      this.phoneClicked = true;
      returnVal = false;
    }
    if(itemName==='about') {
      $('.main').animate({
        'scrollTop':$('#about').offset().top
      }, 1000);
    }
    if(itemName==='home') {
      $('.main').animate({
        'scrollTop':$('body').offset().top
      }, 1000);
    }
    if(this.layoutService.getOrientation()==='portrait') {
      this.show = false;
    }
    return returnVal;
  }
}
