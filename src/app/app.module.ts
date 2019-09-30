import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {AppAboutComponent} from './app-about/app-about.component';
import {AppResearchComponent} from './abandoned/app-research/app-research.component';
import {AppTopNavComponent} from './app-top-nav/app-top-nav.component';
import {AppUxComponent} from './abandoned/app-ux/app-ux.component';
import {AppExperienceComponent} from './app-experience/app-experience.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {AppSkillsComponent} from './app-skills/app-skills.component';
import {AppJumbotronComponent} from './app-jumbotron/app-jumbotron.component';
import {AppHomeComponent} from './app-home/app-home.component';
import {AppRoutingModule} from './app-routing.module';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {ChangeLangService} from './change-lang.service';
import {AppUxScreenComponent} from './abandoned/app-ux-screen/app-ux-screen.component';
import {AppProjectsComponent} from './app-projects/app-projects.component';

const components = [
  AppComponent,
  AppAboutComponent,
  AppExperienceComponent,
  AppFooterComponent,
  AppTopNavComponent,
  AppResearchComponent,
  AppSkillsComponent,
  AppUxComponent,
  AppJumbotronComponent,
  AppHomeComponent,
  AppUxScreenComponent,
  AppProjectsComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
  ],
  providers: [ChangeLangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
