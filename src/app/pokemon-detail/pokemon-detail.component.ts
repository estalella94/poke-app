
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons : any [] = [];

  constructor(
    private dataService: DataService,
    private activatedRouter:ActivatedRoute,
    private router:Router) { 

    }

  ngOnInit(): void {
    
   
  }

  
}
