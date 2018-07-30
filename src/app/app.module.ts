import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentSectionComponent } from './services/content-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import {ConfigService} from "./shared/config.service";
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import {PagerService} from "./shared/pager.service";
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { ContactComponent } from './contact/contact.component';
import {RouteGuardService} from "./shared/route-guard.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentSectionComponent,
    TestimonialsComponent,
    ClientsComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
    PageNotFoundComponent,
    PaginationComponent,
    LoginComponent,
    SignComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ConfigService, PagerService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
