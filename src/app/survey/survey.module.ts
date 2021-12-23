import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyPageRoutingModule } from './survey-routing.module';

import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyPageRoutingModule
  ],
  declarations: [SurveyPage]
})
export class SurveyPageModule {}
////


import { SurveyComponent } from './survey.component';
import { SurveyPage } from './survey.page';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ SurveyComponent, SurveyPage ],
  bootstrap:    [ SurveyComponent ]
})
export class SurveyModule { }
