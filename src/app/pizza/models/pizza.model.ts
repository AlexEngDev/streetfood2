import { Ingrediente } from "./ingrediente.model";
import { Pizzaiolo } from "./pizzaiolo.model";

export class Pizza {

  id: number;
  nome: string;
  prezzo: number;
  immagine: string;
  pizzaiolo: Pizzaiolo;
  ingredienti: Ingrediente[];

  constructor(id: number, nome: string, prezzo: number, immagine: string, pizzaiolo: Pizzaiolo, ingredienti: Ingrediente[]){
    this.id = id;
    this.nome = nome;
    this.prezzo = prezzo;
    this.immagine = immagine;
    this.pizzaiolo = pizzaiolo;
    this.ingredienti = ingredienti;
  }

}
