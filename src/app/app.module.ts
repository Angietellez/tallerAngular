import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { AliadosComponent } from './components/aliados/aliados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NosotrosComponent,
    FooterComponent,
    OfertasComponent,
    AliadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
