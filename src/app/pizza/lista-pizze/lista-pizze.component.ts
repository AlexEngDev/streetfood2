import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-lista-pizze',
  templateUrl: './lista-pizze.component.html',
  styleUrls: ['./lista-pizze.component.css']
})
export class ListaPizzeComponent {


  @Input() receivedPizza:Pizza[]


}
