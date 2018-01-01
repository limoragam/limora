import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, query, style, stagger, animate, state } from '@angular/animations';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  constructor(private activatedRoute:ActivatedRoute, public navigationService:NavigationService) {}

  ngAfterViewInit() {
    this.navigationService.initNavigation();
  }

  setMenuItemsPotentialVisiblity() {
    let currentPath = "/";
    if(this.activatedRoute.snapshot.url.length > 0) {
      currentPath = currentPath + this.activatedRoute.snapshot.url[0].path;
    }
    this.navigationService.menuItems.forEach((menuItem, i) => {
      if("routerLink" in menuItem) {
        if(menuItem["routerLink"] !== currentPath) {
          menuItem.display = 'visible';
        }
      } else {
        menuItem.display = 'visible';
      }
    });
  }
}
