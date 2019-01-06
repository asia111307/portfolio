import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppAboutComponent} from './app-about/app-about.component';
import {AppDevComponent} from './app-dev/app-dev.component';
import {AppOthersComponent} from './app-others/app-others.component';
import {AppUxComponent} from './app-ux/app-ux.component';
import {AppHomeComponent} from './app-home/app-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AppAboutComponent },
  { path: 'ux', component: AppUxComponent },
  { path: 'dev', component: AppDevComponent },
  { path: 'others', component: AppOthersComponent },
  { path: 'home', component: AppHomeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


