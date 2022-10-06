import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/enitties/Hero';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  hero: Hero = {id: 1, name: 'Black Widow'};
  heroes?: Hero[];
  selectedHero?: Hero;


  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeros()
  }

  getHeros(): void{
    this.heroService.getHeroes().subscribe(heros=>this.heroes = heros)
  }
}
