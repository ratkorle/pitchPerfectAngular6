import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpClient, HttpClientModule} from "@angular/common/http";
// import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
//Components
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
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';

//Services
import {RouteGuardService} from './shared/route-guard.service';
import {PagerService} from './shared/pager.service';
import {ConfigService} from './shared/config.service';
import { InMemoryDataService} from './shared/in-memory-data.service';



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
    ContactComponent,
    ArticleEditComponent,
    ArticleCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ConfigService, PagerService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
