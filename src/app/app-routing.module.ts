import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { PatientsComponent } from './patients/patients.component';
import { ProzorroComponent } from './prozorro/prozorro.component';
import { AntiCorruptionComponent } from './anti-corruption/anti-corruption.component';
import { MediaCenterComponent } from './media-center/media-center.component';
import { ReportCorruptionComponent } from './anti-corruption/report-corruption/report-corruption.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'prozorro-market', component: ProzorroComponent},
  {path: 'anticorruption', component: AntiCorruptionComponent, children: [
    { path: 'report-corruption', component:  ReportCorruptionComponent}
  ]
  },
  {path: 'media-center', component: MediaCenterComponent},
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
