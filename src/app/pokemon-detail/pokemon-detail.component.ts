
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail: any;
  
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,) {

  }

  ngOnInit(): void {

    this.getPokemonById()
    
  }

  getPokemonById(): void {
    //conseguir ID de la ruta
  const id = Number(this.route.snapshot.paramMap.get('id'));
    //llamar servicio para obtener el pokemon pasando la id

    this.pokemonDetail = this.dataService.getPokemon(id)
  }

  next(id:any){
   
    if (id<151) {
      var newId = id+1
      this.pokemonDetail = this.dataService.getPokemon(newId)
      console.log(newId);
    }else{
      console.log('error', id);
    }
    

  }

  previous(id:any){
    
    if (id>1) {
      var newId = id-1
      this.pokemonDetail = this.dataService.getPokemon(newId)
    }else{
      console.log('error', id);
    }


   
    

  
  }

}
