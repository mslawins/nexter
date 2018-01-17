import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AssetsComponent } from './assets/assets.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OfferComponent } from './offer/offer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { RealtorsComponent } from './realtors/realtors.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    AssetsComponent,
    TestimonialsComponent,
    OfferComponent,
    GalleryComponent,
    FooterComponent,
    RealtorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
