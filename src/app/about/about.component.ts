import { Component, Input } from '@angular/core';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  aboutHeight = "5vh";
  aboutWidth = "auto";
  // aboutHeight = "60";
  // aboutWidth = "140";
  xHeight = "0.8em";
  xWidth = "0.8em";
  // xHeight = "24.099";
  // xWidth = "23.587";
  @Input() show = false;
  
  constructor(private layoutService:LayoutService) {}


}
