import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({//这个新的服务导入了 Angular 的 Injectable 符号，并且给这个服务类添加了 @Injectable() 装饰器；@Injectable()装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return of(HEROES);//使用 RxJS 的 of() 方法返回了一个模拟英雄数据的可观察对象 (Observable<Hero[]>)。
  }

  getHero(id: number): Observable<Hero> {//模拟英雄数据
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
