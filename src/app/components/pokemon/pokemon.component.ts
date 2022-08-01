import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  formGroup!: FormGroup;
  pokemonSelected = new Pokemon();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      input: new FormControl('')
    });
    this.getPokemon(1);
  }

  getPokemon(id: number): void {
    if(id) {
      this.pokemonService.getPokemon(id).subscribe((response: any) => {
        this.pokemonList = response;
      });
    }
  }

  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelected = pokemon;
  }

}
