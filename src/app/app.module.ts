import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AddPizzaComponent } from './pizza/add-pizza/add-pizza.component';
import { ListaPizzeComponent } from './pizza/lista-pizze/lista-pizze.component';
import { DetailsOfPizzaComponent } from './pizza/lista-pizze/details-of-pizza/details-of-pizza.component';
import { FormsModule } from '@angular/forms';
import { CarelloComponent } from './carello/carello.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AddPizzaComponent,
    ListaPizzeComponent,
    DetailsOfPizzaComponent,
    CarelloComponent
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
