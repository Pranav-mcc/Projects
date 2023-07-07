import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { OutdoorSportsComponent } from './outdoor-sports/outdoor-sports.component';
import { IndoorSportsComponent } from './indoor-sports/indoor-sports.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';
import {MatIconModule} from '@angular/material/icon'
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    AboutComponent,
    OutdoorSportsComponent,
    IndoorSportsComponent,
    AdmissionComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
