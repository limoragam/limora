import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';
import { LayoutService } from './../../layout/layout.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  constructor(public navigationService:NavigationService, public layoutService:LayoutService) {}

  ngAfterViewInit() {
    this.navigationService.initNavigation();
  }

  getClass():string {
    return this.layoutService.getMedia() + " " + (this.navigationService.menuDisplayed ? 'displayed' : 'hidden');
  }

  onClick() {
    if(this.layoutService.getMedia()==='narrow') {
        this.navigationService.hideMenu();
    }
  }
}
