import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutNestComponent } from './layout/layout-nest/layout-nest.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutPortfolioComponent } from './layout/layout-portfolio/layout-portfolio.component';
import { LayoutFeetComponent } from './layout/layout-feet/layout-feet.component';
import { LayoutAboutComponent } from './layout/layout-about/layout-about.component';

const appRoutes:Routes = [
  { 
    path:'', 
    component:LayoutNestComponent, 
    pathMatch:'full' 
  },
  { 
    path:'contact', 
    component:LayoutContactComponent, 
    pathMatch:'full'
  },
  { 
    path:'portfolio', 
    component:LayoutPortfolioComponent, 
    pathMatch:'full'
  },
  {
    path:'feet', 
    component:LayoutFeetComponent, 
    pathMatch:'full'
  },
  {
    path:'about', 
    component:LayoutAboutComponent, 
    pathMatch:'full'
  },
  // {path:'not-found', component:ErrorPageComponent, data:{message:'Error Message: Page not Found'}},
  // {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
