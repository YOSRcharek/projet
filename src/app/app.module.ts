import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListsejourComponent } from './listsejour/listsejour.component';
import { SelectedSejourComponent } from './selected-sejour/selected-sejour.component';
import { AuthenComponent } from './authen/authen.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HotelComponent } from './hotel/hotel.component';
import { MaisonComponent } from './maison/maison.component';
import { PromoMaisonComponent } from './promo-maison/promo-maison.component';
import { PromoHotelComponent } from './promo-hotel/promo-hotel.component';
import { GratuitEnfComponent } from './gratuit-enf/gratuit-enf.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListsejourComponent,
    SelectedSejourComponent,
    AuthenComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ErreurComponent,
    SearchComponent,
    HotelComponent,
    MaisonComponent,
    PromoMaisonComponent,
    PromoHotelComponent,
    GratuitEnfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
