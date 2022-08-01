import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit, OnChanges {
  operacion = 'CREAR';
  @Input() pokemonSelected = new Pokemon();
  pokemonFormGroup!: FormGroup;
  @Output() event: EventEmitter<any> = new EventEmitter()

  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectPokemon(this.pokemonSelected);
  }

  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelected.idAuthor = pokemon.id_author;
    this.pokemonFormGroup = this.initPokemonForm(this.pokemonSelected);
    this.operacion = 'EDITAR';
  }

  ngOnInit(): void {
    this.pokemonFormGroup = this.initPokemonForm(new Pokemon());
  }

  initPokemonForm(pokemon: Pokemon): FormGroup {
    let fm = new FormGroup({
      name: new FormControl(pokemon.name, Validators.required),
      image: new FormControl(pokemon.image, Validators.required),
      attack: new FormControl(pokemon.attack, Validators.required),
      defense: new FormControl(pokemon.defense, Validators.required)
    });
    return fm;
  }

  cancelar(): void {
    this.pokemonFormGroup = this.initPokemonForm(new Pokemon());
    this.pokemonSelected = new Pokemon();
    this.operacion = 'CREAR';
  }

  guardar(idAuthor: number): void {
    if (this.operacion === 'CREAR') {
      this.postPokemon(idAuthor);
    } else {
      this.putPokemon(idAuthor);
    }
  }

  postPokemon(id: number): void {
    if(id) {
      let pokemon = this.createPokemon(id, this.pokemonFormGroup);
      this.pokemonService.postPokemon(id, pokemon).subscribe((response: any) => {
        this.cancelar();
        this.event.emit(pokemon.idAuthor);

      });
    }
  }

  createPokemon(idAuthor: number, pokemonFormGroup: FormGroup): Pokemon {
    return {
      attack: pokemonFormGroup.controls['attack'].value,
      defense: pokemonFormGroup.controls['defense'].value,
      hp: 255,
      id: 0,
      idAuthor: idAuthor,
      image: pokemonFormGroup.controls['image'].value,
      name: pokemonFormGroup.controls['name'].value,
      type: 'na',
      id_author: 0
    }
  }

  putPokemon(id: number): void {
    this.pokemonSelected.attack = this.pokemonFormGroup.controls['attack'].value
    this.pokemonSelected.defense = this.pokemonFormGroup.controls['defense'].value
    this.pokemonSelected.image = this.pokemonFormGroup.controls['image'].value
    this.pokemonSelected.name = this.pokemonFormGroup.controls['name'].value

      this.pokemonService.putPokemon(this.pokemonSelected).subscribe((response: any) => {
        this.event.emit(this.pokemonSelected.idAuthor);
        this.cancelar();
      });
  }

}
