import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { CarelloService } from '../../servizii/carello.service';

@Component({
  selector: 'app-details-of-pizza',
  templateUrl: './details-of-pizza.component.html',
  styleUrls: ['./details-of-pizza.component.css']
})
export class DetailsOfPizzaComponent {


@Input() pizza:Pizza



constructor( private carello:CarelloService) { }

switch:boolean = false;

switchDiv(){
    if(this.switch == false){
      this.switch = true
    }else{
      this.switch = false
    }
  }

  comprarePizza(){
    this.carello.aggPizzaInCarello(this.pizza)
  }



}
