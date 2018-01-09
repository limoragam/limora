import { Component } from '@angular/core';
import { LayoutService } from './../../layout/layout.service';

@Component({
  selector: 'app-content-contact',
  templateUrl: './content-contact.component.html',
  styleUrls: ['./content-contact.component.scss']
})
export class ContentContactComponent {
  phoneClicked = false;

  constructor(public layoutService:LayoutService) {}

  phoneClick() {
    this.phoneClicked = true;
    return false;
  }
}
