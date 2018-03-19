import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  flowState = 'pending';  // pending, slide-in, stop
}
