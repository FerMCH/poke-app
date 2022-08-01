import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'image', 'attack', 'defense', 'actions'];
  @Input() pokemonList: Pokemon[] = [];

  @Output() event: EventEmitter<any> = new EventEmitter()


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

  }

  deletePokemon(pokemon: Pokemon): void {
    this.pokemonService.deletePokemon(pokemon.id).subscribe(() => {
      this.pokemonService.getPokemon(pokemon.id_author).subscribe((response) => {
        this.pokemonList = response;
      })
    })
  }

  selectPokemon(pokemon: Pokemon): void {
    this.event.emit(pokemon);
  }

}
