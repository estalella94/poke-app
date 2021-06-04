import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  pokemons: any[] = [];

  constructor(
    private http: HttpClient
  ) { }


  /*
 this.dataService.getPokemons()
 .subscribe((pokelist: any)=> {

   pokelist.results.forEach((result:any) => {
     this.dataService.getMoreData(result.name)
     .subscribe((pokedata:any)=> {

       this.pokemons.push(pokedata);

     });
   });
 });

 console.log("pokemons encontrados ", this.pokemons);


*/


  // este metodo tiene que conseguir la lista de pokemons mediante una llamada a la api 
  //con este listado de pokemons tenemos que hacer un forEach para conseguir los datos de cada pokemon
  /*
  getPokemons(){
    //conseguir listado de pokemons 
    this.http.get(`https://pokeapi.co/api/v2/pokemon/`)
    .toPromise()
    .then((response:any) => {
      console.log(response);
      response.results.forEach((elemento:any) => {
        this.http.get(`https://pokeapi.co/api/v2/pokemon/${elemento.name}`)
        .toPromise()
        .then((pokemonResult)=>{
          this.pokemons.push(pokemonResult)
          console.log('pokemons conseguidos!',this.pokemons);
        })
      })
    }).catch((err) => {
      console.log(err);
    });
  
  */



  async getPokemons() {
    //conseguir paquete de 20 pokemons
    let pokemonObtenido
    return new Promise(async (resolve, reject) => {
      for (let i = 1; i <= 150; i++) {
        pokemonObtenido = await this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).toPromise();
        this.pokemons.push(pokemonObtenido)
        
      }
      console.log('pokemons antes del resolve',this.pokemons);
      resolve(this.pokemons)
     
    })

  }
  /*
 getDataById(){
   this.pokemons
   
   
 }
*/
      


     
   
  

  



}
