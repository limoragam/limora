import * as $ from 'jquery';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { VisualXComponent } from './visuals/visual-x/visual-x.component';
import { VisualLimoragamComponent } from './visuals/visual-limoragam/visual-limoragam.component';
import { VisualDragonComponent } from './visuals/visual-dragon/visual-dragon.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TitleLimoragamComponent } from './title-limoragam/title-limoragam.component';

import { LayoutService } from './layout/layout.service';
import { NavigationService } from './navigation/navigation.service';
import { GalleryService } from './gallery/gallery.service';

import { MultiplyPipe } from './multiply.pipe';
import { SliderComponent } from './slider/slider.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AboutComponent,
    VisualXComponent,
    VisualLimoragamComponent,
    VisualDragonComponent,
    NavigationComponent,
    HamburgerComponent,
    MultiplyPipe,
    HomeComponent,
    GalleryComponent,
    TitleLimoragamComponent,
    SliderComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LayoutService,
    NavigationService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
