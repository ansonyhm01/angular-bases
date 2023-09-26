import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { PruebaModule } from './prueba/prueba.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    // PruebaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
