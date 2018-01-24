import { Component } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-visual-limoragam',
  templateUrl: './visual-limoragam.component.html',
  styleUrls: ['./visual-limoragam.component.scss']
})
export class VisualLimoragamComponent {
  constructor(public layoutService:LayoutService) {}
}
