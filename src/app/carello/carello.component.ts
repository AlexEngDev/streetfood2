import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CarelloService } from '../pizza/servizii/carello.service';
import { Pizza } from '../pizza/models/pizza.model';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent implements OnChanges, OnInit{

pizzaAggiunta:Pizza[];


  constructor( private carello:CarelloService) { }


  ngOnInit(): void {
    this.shovCarello()
    this.carello.returnPizze()
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  shovCarello(){
    this.pizzaAggiunta = this.carello.returnPizze()
  }



}
