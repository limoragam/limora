import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-x',
  templateUrl: './visual-x.component.html',
  styleUrls: ['./visual-x.component.scss']
})
export class VisualXComponent implements OnInit {
  @Input() xHeight = "0.8em";
  @Input() xWidth = "0.8em";
  xHeightOriginal = "24.099";
  xWidthOriginal = "23.587";
  @Input() show = false;
  @Output() clicked = new EventEmitter<any>();
  @Input() positionTop = "2.5em";
  @Input() positionRight = "3.5em";
  position = {};

  ngOnInit() {
    this.position = {'top':this.positionTop, 'right':this.positionRight};
  }

  onClick() {
    this.show = false;
    this.clicked.emit();
    console.log("here");
  }
}
