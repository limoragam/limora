import { Component, AfterViewInit } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-visual-limoragam',
  templateUrl: './visual-limoragam.component.html',
  styleUrls: ['./visual-limoragam.component.scss']
})
export class VisualLimoragamComponent {
  constructor(public layoutService:LayoutService) {}

  getHeight() {
    return (this.layoutService.getOrientation()==='landscape') ? window.innerHeight*0.08 : null;
  }

  getWidth() {
    return (this.layoutService.getOrientation()==='portrait') ? window.innerWidth*0.96 : null;
  }
}
