import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
