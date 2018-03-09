import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LayoutComponent } from './layout/layout.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes:Routes = [
  { 
    path:'', 
    component:HomeComponent, 
    pathMatch:'full' 
  },
  { 
    path:'gallery', 
    component:GalleryComponent, 
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
