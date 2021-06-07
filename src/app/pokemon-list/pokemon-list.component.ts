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

 async ngOnInit(){
   


    this.pokemons = <any>await this.dataService.getPokemons()
    console.log('pokemons en componente', this.pokemons);

    
  





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



    

    
  
  
    
  

 


