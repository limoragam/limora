import { Component, Input } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-visual-mushroom',
  templateUrl: './visual-mushroom.component.html',
  styleUrls: ['./visual-mushroom.component.scss']
})
export class VisualMushroomComponent {
  @Input() show = false;
  width = 140 * this.layoutService.visualsPercentage;
  // height = null;// "" + 105 * this.layoutService.visualsPercentage + "px";

  constructor(private layoutService:LayoutService) {}

  onResize() {
    this.width = 140 * this.layoutService.visualsPercentage;
  }
}
