import { Component, Input } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-visual-mushroom',
  templateUrl: './visual-mushroom.component.html',
  styleUrls: ['./visual-mushroom.component.scss']
})
export class VisualMushroomComponent {
  width = 140 * this.layoutService.getVisualsPercentage();

  constructor(private layoutService:LayoutService) {}

  ngAfterViewInit() {
    window.addEventListener("orientationchange", ()=>{
      this.setWidth();
    }, false);
  }

  onResize() {
    this.setWidth();
  }

  setWidth() {
    this.width = 140 * this.layoutService.getVisualsPercentage();
  }

  getWidth():number {
    return (this.layoutService.getOrientation()==='landscape') ?
      140 * this.layoutService.getVisualsPercentage() :
      100 * this.layoutService.getVisualsPercentage();
  }
}
