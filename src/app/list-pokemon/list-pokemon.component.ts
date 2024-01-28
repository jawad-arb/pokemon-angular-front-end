import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent {
  pokemonList:Pokemon[] =POKEMONS;

  constructor(private router:Router){}

  goToPokemonWithPokemonId(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}
