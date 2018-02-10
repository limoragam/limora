import * as $ from 'jquery';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AboutComponent } from './about/about.component';
import { VisualXComponent } from './visuals/visual-x/visual-x.component';
import { VisualLimoragamComponent } from './visuals/visual-limoragam/visual-limoragam.component';
import { VisualDragonComponent } from './visuals/visual-dragon/visual-dragon.component';
import { VisualMushroomComponent } from './visuals/visual-mushroom/visual-mushroom.component';

import { LayoutService } from './layout/layout.service';

import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AboutComponent,
    VisualXComponent,
    VisualLimoragamComponent,
    VisualDragonComponent,
    VisualMushroomComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
