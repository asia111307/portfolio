import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppHomeComponent} from './app-home/app-home.component';
import {AppUxComponent} from './abandoned/app-ux/app-ux.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent },
  { path: 'ux', component: AppUxComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


