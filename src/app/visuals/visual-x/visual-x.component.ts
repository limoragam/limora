import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visual-x',
  templateUrl: './visual-x.component.html',
  styleUrls: ['./visual-x.component.scss']
})
export class VisualXComponent {
  @Input() xHeight = "0.8em";
  @Input() xWidth = "0.8em";
  xHeightOriginal = "24.099";
  xWidthOriginal = "23.587";
  @Input() show = true;
  @Output() clicked = new EventEmitter<any>();

  onClick() {
    this.clicked.emit();
  }
}
