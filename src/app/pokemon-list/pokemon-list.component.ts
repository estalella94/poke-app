import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons : any [] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
    .subscribe((pokelist: any)=> {

      pokelist.results.forEach((result:any) => {
        this.dataService.getMoreData(result.url)
        .subscribe((pokedata:any)=> {

          this.pokemons.push(pokedata);
          
        });
      });
    });
           
    console.log("pokemons encontrados ", this.pokemons);
  }

  

}
