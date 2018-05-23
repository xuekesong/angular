import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [//声明顶层组件
    AppComponent
  ],
  imports: [//辅助模块
    BrowserModule,//浏览器的必备服务和指令
    FormsModule,//表单处理和双向绑定
    HttpModule//Http请求和响应的服务
  ],
  providers: [],//本模块注入的服务
  bootstrap: [AppComponent]//作为引导性文件，放入index.html的对应位置
})
export class AppModule { }
