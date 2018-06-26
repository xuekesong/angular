import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }//public公共属性 在创建 MessagesComponent 的实例时 把 MessageService 的实例注入到这个属性中。

  ngOnInit() {
    
  }

}
