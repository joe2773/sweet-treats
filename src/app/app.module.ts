import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FavouriteCakesComponent } from './components/menu/favourite-cakes/favourite-cakes.component';
import { CupcakesComponent } from './components/menu/cupcakes/cupcakes.component';
import { AlmondTartsComponent } from './components/menu/almond-tarts/almond-tarts.component';
import { BrowniesAndBlondesComponent } from './components/menu/brownies-and-blondes/brownies-and-blondes.component';
import { CakeSlabsComponent } from './components/menu/cake-slabs/cake-slabs.component';
import { OtherProductsComponent } from './components/menu/other-products/other-products.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactUsComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    MenuCardComponent,
    GalleryComponent,
    FavouriteCakesComponent,
    CupcakesComponent,
    AlmondTartsComponent,
    BrowniesAndBlondesComponent,
    CakeSlabsComponent,
    OtherProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
