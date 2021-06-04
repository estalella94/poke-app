import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons : any [] = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
   


    
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
  





  }

  pokemonDetail() {
    this.router.navigateByUrl('/pokemon-detail')
  }
  
/*
  getPokemons(){
    let pokemon;

  for (let i = 1; i <= 150; i++){
    this.dataService.getPokemons(i).subscribe(
      res=> {
        
      },
      err =>{
        console.log(err);
      }
    );
  }
*/
  
}



    

    
  
  
    
  

 


