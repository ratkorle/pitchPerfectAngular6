import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {PricingComponent} from "./pricing/pricing.component";
import {ClientsComponent} from "./clients/clients.component";
import {TestimonialsComponent} from "./testimonials/testimonials.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {HeaderComponent} from "./header/header.component";
import {ContentSectionComponent} from "./content-section/content-section.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HeaderComponent},
  {path: 'about', component: IntroComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'services', component: ContentSectionComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'pricing', component: PricingComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
