import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {PricingComponent} from "./pricing/pricing.component";
import {ClientsComponent} from "./clients/clients.component";
import {TestimonialsComponent} from "./testimonials/testimonials.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {HeaderComponent} from "./header/header.component";
import {ContentSectionComponent} from "./services/content-section.component";
import {BlogComponent} from "./blog/blog.component";
import {ArticleComponent} from "./article/article.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {RouteGuardService} from "./shared/route-guard.service";
import {LoginComponent} from "./login/login.component";
import {SignComponent} from "./sign/sign.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HeaderComponent},
  {path: 'about', component: IntroComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'services', component: ContentSectionComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'blog', component: BlogComponent,canActivate: [RouteGuardService]},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
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
