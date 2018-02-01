import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  phoneClicked = false;

  phoneClick() {
    this.phoneClicked = true;
    return false;
  }
}
