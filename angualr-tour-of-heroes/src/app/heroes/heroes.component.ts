import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({//装饰器
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //在构造函数中添加一个私有属性heroService
  constructor(private heroService: HeroService) {}

  heroes: Hero[];
  // selectedHero:  Hero;
  // onSelect(hero:  Hero): void {
  //   this.selectedHero = hero;
  // }
  getHeroes() {//
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {//ngOnInit生命周期钩子
    this.getHeroes();//初始化英雄列表
  }
  
}
