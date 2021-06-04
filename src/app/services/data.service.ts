import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(
    private http: HttpClient
  ) { }



  






  
// Get Pokemons

getPokemons(){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/`)
}

// get more Pokemons data

getMoreData(id:string){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}




}
