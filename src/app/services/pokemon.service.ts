import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private endpointBase = 'https://bp-pokemons.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  public getPokemon(id: number): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(`${this.endpointBase}?idAuthor=${id}`);
  }

  public postPokemon(id: number, pokemon: Pokemon): Observable<Pokemon> {
    return this.httpClient.post<Pokemon>(`${this.endpointBase}?idAuthor=${id}`, pokemon);
  }

  public deletePokemon(id: number): Observable<any> {
    return this.httpClient.delete<Pokemon[]>(`${this.endpointBase}${id}`);
  }

  public putPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.httpClient.put<Pokemon>(`${this.endpointBase}${pokemon.id}`, pokemon);
  }

}
