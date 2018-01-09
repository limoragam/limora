import { Component } from '@angular/core';
import { LayoutService } from './../../layout/layout.service';

@Component({
  selector: 'app-visual-squawk',
  templateUrl: './visual-squawk.component.html',
  styleUrls: ['./visual-squawk.component.scss']
})
export class VisualSquawkComponent {
  narrowVisualWidth = this.layoutService.getMaxWidth();

  constructor(public layoutService:LayoutService) { }
}
