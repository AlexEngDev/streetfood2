import { Injectable, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { Ingrediente } from '../models/ingrediente.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService implements OnInit{


  listaPizze:Pizza[]=[]

  constructor() { }

addPizza( pizza: Pizza){
  this.listaPizze.push(pizza)
  }

  ngOnInit(): void {
  }



/*
  setData(pizza: Pizza) {
    this.pizza = pizza;
    console.log(this.pizza);

  }

  getData():Pizza {
    return this.pizza;
  }
*/
}
