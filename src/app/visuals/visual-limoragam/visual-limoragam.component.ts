import { Component, Input } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-visual-limoragam',
  templateUrl: './visual-limoragam.component.html',
  styleUrls: ['./visual-limoragam.component.scss']
})
export class VisualLimoragamComponent {
  @Input() percentOfWindowInnerHeightLandscape = 0.08;
  @Input() percentOfWindowInnerWidthPortrait = 0.96;

  constructor(public layoutService:LayoutService) {}

  getHeight() {
    return (this.layoutService.getOrientation()==='landscape') ? window.innerHeight*this.percentOfWindowInnerHeightLandscape : null;
  }

  getWidth() {
    return (this.layoutService.getOrientation()==='portrait') ? window.innerWidth*this.percentOfWindowInnerWidthPortrait : null;
  }
}
