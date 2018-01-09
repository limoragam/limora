import { Component } from '@angular/core';
import { LayoutService } from './../../layout/layout.service';

@Component({
  selector: 'app-visual-feet',
  templateUrl: './visual-feet.component.html',
  styleUrls: ['./visual-feet.component.scss']
})
export class VisualFeetComponent {
  // smallImage = {viewbox:"-85 -85 170 170", height:160, width:160};
  height = this.layoutService.getMaxWidth() < 410 ? 150 : 200;
  width = this.width;
  opacity = {kickRight:1, lookDown:1, rightFootUp:1, stepLeft:1, lookUp:1, stepRight:1};
  resizeTimeout:any;

  constructor(private layoutService:LayoutService) {}

  dimOthers(enlarged:string) {
    let keys = Object.keys(this.opacity);
    keys.forEach(key=>{
      if(key !== enlarged) {
        this.opacity[key] = 0.4;
      }
    });
  }

  undim() {
    Object.keys(this.opacity).forEach(key => {
      this.opacity[key] = 1;
    });
  }

  // setImagesSize() {
  //   this.height = this.layoutService.getMaxWidth() < 410 ? 150 : 200;
  //   this.width = this.width;
  // }

  onResize(event:Event) {
    // Set a timeout for event to finish before calculating. 
    // If event was fired before timeout was finished, clear timeout and set another
    if(this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(()=>{
      this.height = this.layoutService.getMaxWidth() < 410 ? 150 : 200;
      this.width = this.width;
    }, 50);
  }
}
