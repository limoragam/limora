import { Component } from '@angular/core';

@Component({
  selector: 'app-visual-feet',
  templateUrl: './visual-feet.component.html',
  styleUrls: ['./visual-feet.component.scss']
})
export class VisualFeetComponent {
  // smallImage = {viewbox:"-85 -85 170 170", height:160, width:160};
  height = 200;
  width = 200;
  opacity = {kickRight:1, lookDown:1, rightFootUp:1, stepLeft:1, lookUp:1, stepRight:1};

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
}
