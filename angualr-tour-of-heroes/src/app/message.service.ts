import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages: string[] = [];

  add(message: string) {//向缓存中添加消息
    this.messages.push(message);
  }

  clear() {//清除缓存
    this.messages = [];
  }
}
