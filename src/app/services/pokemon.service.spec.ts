import { HttpClientTestingModule } from '@angular/common/http/testing';
import { lastValueFrom, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpClientSpy: {
    get: jasmine.Spy,
    post: jasmine.Spy,
    put: jasmine.Spy,
    delete: jasmine.Spy
   };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new PokemonService(httpClientSpy as any);
  });


  it('get pokemon', (done: DoneFn) => {

    const pokemons: Pokemon[] = [
      {
        "id": 1870,
        "name": "Pikachu",
        "image": "https:www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png",
        "attack": 60,
        "defense": 40,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1903,
        "name": "Charmander24",
        "image": "https://www.pngmart.com/files/13/Charmander-PNG-HD.png",
        "attack": 100,
        "defense": 100,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1905,
        "name": "DRAGONITE",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
        "attack": 100,
        "defense": 100,
        "hp": 1,
        "type": "n/a",
        "id_author": 1
      },
      {
        "id": 1907,
        "name": "DRAGONITE",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
        "attack": 10,
        "defense": 10,
        "hp": 10,
        "type": "n/a",
        "id_author": 1
      },
      {
        "id": 1909,
        "name": "Test",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
        "attack": 100,
        "defense": 100,
        "hp": 35,
        "type": "electric",
        "id_author": 1
      },
      {
        "id": 1913,
        "name": "newPoke",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
        "attack": 100,
        "defense": 100,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1915,
        "name": "newPoke",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
        "attack": 100,
        "defense": 100,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1917,
        "name": "newPoke",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
        "attack": 100,
        "defense": 100,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1918,
        "name": "UpdatePo",
        "image": "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
        "attack": 100,
        "defense": 100,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1919,
        "name": "cangrejo",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTExYUFBQWFxYYGRgbFhkYGRcYGRkWIRgXGBkYFhgZHioiHBsnHhkbIzQkJystMDEwGSI2OzYuOiowMC0BCwsLDw4PHBERHC8oIicxNDAvLy8vLy8vMTQ4Ly84Mi8vLy8vLy8vMS8wLy8vMi8vLy8vLy8vLy8vLy8vMi8vLf/AABEIANgA6gMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EAEIQAAIBAgQDBQQHBgUDBQAAAAECAwARBBIhMQUTQQYiUWFxFDJCgSNSYnKCkaEHM1NzscFDY5Ki0YOTwiQ0NbKz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQCAwUBBv/EAC4RAAICAQQBAgMHBQAAAAAAAAABAgMRBBIhMUETUWFxgQUiMjOhwdEUI5Gx8P/aAAwDAQACEQMRAD8A7jSlKAFKU",
        "attack": 38,
        "defense": 22,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1924,
        "name": "Caterpiee",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        "attack": 21,
        "defense": 77,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1927,
        "name": "Charmander",
        "image": "https://www.pngmart.com/files/13/Charmander-PNG-HD.png",
        "attack": 60,
        "defense": 40,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1933,
        "name": "Dragonite6",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
        "attack": 84,
        "defense": 41,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1934,
        "name": "Caterpie",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        "attack": 21,
        "defense": 77,
        "hp": 100,
        "type": "Dragon",
        "id_author": 1
      },
      {
        "id": 1951,
        "name": "c3",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        "attack": 194,
        "defense": 181,
        "hp": 255,
        "type": "na",
        "id_author": 1
      },
      {
        "id": 1952,
        "name": "1122",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        "attack": 49,
        "defense": 183,
        "hp": 255,
        "type": "na",
        "id_author": 1
      }
    ];

   httpClientSpy.get.and.returnValue(of(pokemons));

    service.getPokemon(1).subscribe(response => {
      expect(response).toEqual(pokemons);
      done();
    });

  });

  it('Delete pokemon', (done: DoneFn) => {

    const res = {"success":true,"type":"pokemon_removed","data":[]}

   httpClientSpy.delete.and.returnValue(of(res));

   let id = 1934;
    service.deletePokemon(id).subscribe(response => {
      expect(response).toEqual(res);
      done();
    });

  });


  it('put pokemon', (done: DoneFn) => {

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

   httpClientSpy.put.and.returnValue(of(pokemon));

   let id = 1934;
    service.putPokemon(pokemon).subscribe(response => {
      expect(response).toEqual(pokemon);
      done();
    });

  });


  it('post pokemon', (done: DoneFn) => {

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

   httpClientSpy.post.and.returnValue(of(pokemon));

   let id = 1;
    service.postPokemon(id,pokemon).subscribe(response => {
      expect(response).toEqual(pokemon);
      done();
    });

  });




  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
