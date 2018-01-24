import { Component, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  aboutHeight = "60";
  aboutWidth = "140";
  xHeight = "24.099";
  xWidth = "23.587";
  @Output() hide:EventEmitter<any> = new EventEmitter<any>();
  phoneClicked = false;
  
  constructor(private layoutService:LayoutService) { 
    this.setXDimensions();    
  }

  setXDimensions() {
    this.aboutHeight = this.layoutService.getOrientation()==="landscape" ? "5vh" : null;
    this.aboutWidth = this.layoutService.getOrientation()==="portrait" ? "5vw" : null;
    this.xHeight = this.layoutService.getOrientation()==="landscape" ? "2vh" : null;
    this.xWidth = this.layoutService.getOrientation()==="portrait" ? "2vw" : null;
  }

  onClose() {
    this.hide.emit();
  }

  phoneClick() {
    this.phoneClicked = true;
    return false;
  }
}
