import { Component } from '@angular/core';
import { LayoutService } from './../layout.service';

@Component({
  selector: 'app-layout-nest',
  templateUrl: './layout-nest.component.html',
  styleUrls: ['./layout-nest.component.scss']
})
export class LayoutNestComponent {
  constructor(public layoutService:LayoutService) {}
}
