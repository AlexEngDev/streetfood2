import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { PizzaService } from './servizii/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})


export class PizzaComponent implements OnInit, OnChanges{

  receivedPizza: Pizza[];

  constructor(private pizzaService: PizzaService) {
   }

  ngOnInit(): void {
    this.receivedPizza = this.pizzaService.listaPizze
    console.log(this.receivedPizza);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


}
