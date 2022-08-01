import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from 'src/app/models/pokemon';

import { PokemonFormComponent } from './pokemon-form.component';

describe('PokemonFormComponent', () => {
  let component: PokemonFormComponent;
  let fixture: ComponentFixture<PokemonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ PokemonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Init form grop', () => {
    const pokemon: Pokemon = {
      "id": 1951,
      "name": "c3",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      "attack": 194,
      "defense": 181,
      "hp": 255,
      "type": "na",
      "id_author": 1
  }
    const fm = component.initPokemonForm(pokemon);
    expect(fm).toBeTruthy();
  });

  it('Cancelar', () => {
    const pokemon = new Pokemon();
    component.cancelar();
    expect(component.pokemonSelected).toEqual(pokemon);
  });

  it('select pokemon', () => {
    const pokemon = new Pokemon();
    component.selectPokemon(pokemon);
    expect(component.operacion).toEqual('EDITAR');
  });


  it('Create pokemon', () => {
    const pokemon: Pokemon = {
      "id": 1951,
      "name": "c3",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      "attack": 194,
      "defense": 181,
      "hp": 255,
      "type": "na",
      'idAuthor': 1,
      "id_author": 1
  }
    const fm = component.initPokemonForm(pokemon);
    const poke = component.createPokemon(pokemon.id_author, fm);

    expect(poke).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
