import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { PaginaErroneaComponent } from './components/pagina-erronea/pagina-erronea.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AcerdaDeComponent } from './components/acerda-de/acerda-de.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PaginaErroneaComponent,
    HomeComponent,
    HeaderComponent,
    AcerdaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
