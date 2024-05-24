import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExpComponent } from './exp/exp.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { SkillComponent } from './skill/skill.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
