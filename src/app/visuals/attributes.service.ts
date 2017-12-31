import { Injectable } from '@angular/core';

@Injectable()
export class AttributesService {
  // General
  wingcolor = "#917c6f";
  feetcolor = "#00c8e1";
  
  attrFrame = {fill:'white', 'fill-rule':'evenodd'};
  attrWings = {fill:this.wingcolor, 'fill-rule':'evenodd'};
  attrBeak = {fill:this.feetcolor, 'fill-rule':'evenodd'};
  attrFeet = {fill:this.feetcolor, 'fill-rule':'evenodd'};
  
  // Egg
  attrEgg = {fill:'white', 'fill-rule':'evenodd'};
}
