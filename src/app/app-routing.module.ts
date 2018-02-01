import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout/layout.component';

const appRoutes:Routes = [
  { 
    path:'', 
    component:LayoutComponent, 
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
