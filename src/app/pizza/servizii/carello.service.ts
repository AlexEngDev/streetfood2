import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class CarelloService {

  constructor() { }


  carelloPizza:Pizza[]=[]


  aggPizzaInCarello( pizza: Pizza){
    this.carelloPizza.push(pizza)
    console.log(this.carelloPizza);

    }

    returnPizze():Pizza[]{
      return this.carelloPizza
    }

}
