import { Component } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { Ingrediente } from '../models/ingrediente.model';
import { Pizzaiolo } from '../models/pizzaiolo.model';
import { PizzaService } from '../servizii/pizza.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent {

  constructor(private pizzaService: PizzaService) { }

  pizza: Pizza;


  idPizza: number = 1;
  nomePizza: string = "Napoletana";
  prezzoPizza: number = 10;
  immaginePizza: string = "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  nomePizzaiolo: string = "Jack";
  cognomePizzaiolo: string = "Daniels";

  ingredientePizza: Ingrediente[]=[
    {nomeIngrediente: "Farina"},
    {nomeIngrediente: "Pomodoro"},
    {nomeIngrediente: "Mozzarella"}
  ]




  onAddPizza(){

    this.pizza = new Pizza (this.idPizza, this.nomePizza, this.prezzoPizza, this.immaginePizza, new Pizzaiolo(this.nomePizzaiolo, this.cognomePizzaiolo), this.ingredientePizza)
    this.pizzaService.addPizza(this.pizza)

 }

}
