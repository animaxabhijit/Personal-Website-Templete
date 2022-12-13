import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './Components/header/header.component';
import {LandingPageComponent} from './Pages/landing-page/landing-page.component';
import {NavMenuBtnComponent} from './Components/header/components/nav-menu-btn/nav-menu-btn.component';
import {AboutPageComponent} from './Pages/about-page/about-page.component';
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "./Modules/material/material.module";
import {ContactUsPageComponent} from './Pages/contact-us-page/contact-us-page.component';
import {
  SendMessageFormComponent
} from './Pages/contact-us-page/components/send-message-form/send-message-form.component';
import {FooterComponent} from './Components/footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    NavMenuBtnComponent,
    AboutPageComponent,
    ContactUsPageComponent,
    SendMessageFormComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
