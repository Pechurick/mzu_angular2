import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { PatientsComponent } from './patients/patients.component';
import { ProzorroComponent } from './prozorro/prozorro.component';
import { AntiCorruptionComponent } from './anti-corruption/anti-corruption.component';
import { MediaCenterComponent } from './media-center/media-center.component';
import { ReportCorruptionComponent } from './anti-corruption/report-corruption/report-corruption.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent,
    AboutUsComponent,
    SuppliersComponent,
    PatientsComponent,
    ProzorroComponent,
    AntiCorruptionComponent,
    MediaCenterComponent,
    ReportCorruptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
