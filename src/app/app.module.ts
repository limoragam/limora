import * as $ from 'jquery';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LayoutNestComponent } from './layout/layout-nest/layout-nest.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutFeetComponent } from './layout/layout-feet/layout-feet.component';
import { LayoutPortfolioComponent } from './layout/layout-portfolio/layout-portfolio.component';
import { LayoutAboutComponent } from './layout/layout-about/layout-about.component';
import { ContentNestComponent } from './content/content-nest/content-nest.component';
import { ContentFeetComponent } from './content/content-feet/content-feet.component';
import { ContentContactComponent } from './content/content-contact/content-contact.component';
import { ContentPortfolioComponent } from './content/content-portfolio/content-portfolio.component';
import { ContentAboutComponent } from './content/content-about/content-about.component';
import { LineHorizontalComponent } from './visuals/line-horizontal/line-horizontal.component';
import { VisualNestComponent } from './visuals/visual-nest/visual-nest.component';
import { VisualEggComponent } from './visuals/visual-egg/visual-egg.component';
import { VisualFeetComponent } from './visuals/visual-feet/visual-feet.component';
import { VisualSquawkComponent } from './visuals/visual-squawk/visual-squawk.component';
import { VisualAboutComponent } from './visuals/visual-about/visual-about.component';

import { NavigationService } from './common/navigation/navigation.service';

import { SafeUrlPipe } from './common/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutNestComponent,
    LayoutContactComponent,
    LayoutFeetComponent,
    ContentNestComponent,
    ContentFeetComponent,
    ContentContactComponent,
    NavigationComponent,
    LineHorizontalComponent,
    VisualNestComponent,
    VisualEggComponent,
    VisualFeetComponent,
    VisualSquawkComponent,
    SafeUrlPipe,
    LayoutPortfolioComponent,
    ContentPortfolioComponent,
    LayoutAboutComponent,
    ContentAboutComponent,
    VisualAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
