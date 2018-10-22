import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppResearchComponent } from './app-research/app-research.component';
import { AppGraphicsComponent } from './app-graphics/app-graphics.component';
import { AppOthersComponent } from './app-others/app-others.component';
import { AppTopNavComponent } from './app-top-nav/app-top-nav.component';
import { AppUxComponent } from './app-ux/app-ux.component';
import { AppDevComponent } from './app-dev/app-dev.component';
import { AppExperienceComponent } from './app-experience/app-experience.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSchoolComponent } from './app-school/app-school.component';
import { AppSkillsComponent } from './app-skills/app-skills.component';
import { AppJumbotronComponent } from './app-jumbotron/app-jumbotron.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppRoutingModule } from './app-routing.module';


const components = [
  AppComponent,
  AppAboutComponent,
  AppDevComponent,
  AppExperienceComponent,
  AppFooterComponent,
  AppTopNavComponent,
  AppGraphicsComponent,
  AppOthersComponent,
  AppResearchComponent,
  AppSchoolComponent,
  AppSkillsComponent,
  AppUxComponent,
  AppJumbotronComponent,
  AppHomeComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
