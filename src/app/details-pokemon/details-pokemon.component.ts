import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrl: './details-pokemon.component.css'
})
export class DetailsPokemonComponent implements OnInit{

  pokemonList:Pokemon[];
  pokemon:Pokemon|undefined;

  constructor(private route:ActivatedRoute,private router:Router){ }

  ngOnInit(): void {
    this.pokemonList=POKEMONS;
    const pokemonId:string|null=this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon=this.pokemonList.find(pokemon=>pokemon.id==+pokemonId);
    }
  }
  goBack(){
    this.router.navigate(['/pokemons']);
  }
  
}
