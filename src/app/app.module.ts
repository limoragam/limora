import * as $ from 'jquery';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutPortfolioComponent } from './layout/layout-portfolio/layout-portfolio.component';
import { LayoutAboutComponent } from './layout/layout-about/layout-about.component';
import { ContentContactComponent } from './content/content-contact/content-contact.component';
import { ContentPortfolioComponent } from './content/content-portfolio/content-portfolio.component';
import { ContentAboutComponent } from './content/content-about/content-about.component';
import { LineHorizontalComponent } from './visuals/line-horizontal/line-horizontal.component';
import { VisualNestComponent } from './visuals/visual-nest/visual-nest.component';
import { VisualEggComponent } from './visuals/visual-egg/visual-egg.component';
import { VisualSquawkComponent } from './visuals/visual-squawk/visual-squawk.component';
import { VisualAboutComponent } from './visuals/visual-about/visual-about.component';

import { NavigationService } from './common/navigation/navigation.service';
import { LayoutService } from './layout/layout.service';

import { SafeUrlPipe } from './common/safe-url.pipe';
import { LayoutComponent } from './layout/layout/layout.component';
import { VisualHamburgerComponent } from './visuals/visual-hamburger/visual-hamburger.component';
import { VisualXComponent } from './visuals/visual-x/visual-x.component';
import { VisualLimoragamComponent } from './visuals/visual-limoragam/visual-limoragam.component';
import { VisualDragonComponent } from './visuals/visual-dragon/visual-dragon.component';
import { NavComponent } from './common/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutContactComponent,
    ContentContactComponent,
    NavigationComponent,
    LineHorizontalComponent,
    VisualNestComponent,
    VisualEggComponent,
    VisualSquawkComponent,
    SafeUrlPipe,
    LayoutPortfolioComponent,
    ContentPortfolioComponent,
    LayoutAboutComponent,
    ContentAboutComponent,
    VisualAboutComponent,
    LayoutComponent,
    VisualHamburgerComponent,
    VisualXComponent,
    VisualLimoragamComponent,
    VisualDragonComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NavigationService,
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
