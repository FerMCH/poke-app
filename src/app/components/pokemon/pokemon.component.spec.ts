import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from 'src/app/models/pokemon';

import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ PokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('select pokemon', () => {
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
    component.selectPokemon(pokemon);
    expect(component.pokemonSelected).toEqual(pokemon);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
