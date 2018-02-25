import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Output() aboutClicked = new EventEmitter<any>();
  phoneClicked = false;

  phoneClick() {
    this.phoneClicked = true;
    return false;
  }

  onAboutClick() {
    this.aboutClicked.emit();
  }
}
