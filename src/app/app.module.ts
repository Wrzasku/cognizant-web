import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { SummaryComponent } from "./summary/summary.component";
import { ChallengeComponent } from "./challenge/challenge.component";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MaterialModule} from "./module/material-module";

@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'challenge', component: ChallengeComponent},
      {path: 'summary', component: SummaryComponent},
      {path: '', redirectTo: '/challenge', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
