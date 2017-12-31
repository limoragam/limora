import { Component } from '@angular/core';
import { AttributesService } from './visuals/attributes.service';
import { AnimationService } from './visuals/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AttributesService, AnimationService]
})
export class AppComponent {
  title = 'Limor Agam';
}
