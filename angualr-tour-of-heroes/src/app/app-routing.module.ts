import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//通常不会在路由模块中声明组件，故可以删除@NgModule.declarations并删除对CommonModule的引用。
//所以要使用 RouterModule 中的Routers类来配置路由器，从@angular/router中导入符号
//添加一个@NgModule.exports数组，其中放上 RouterModule 导出RouterModule让路由器的相关指令可以在 AppModule 中的组件中使用
//path: 一个用于匹配浏览器地址栏中 URL 的字符串
//component: 当导航到此路由时，路由器应该创建哪个组件
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },//路由器将会把 URL 匹配到 path: 'heroes'，并显示 HeroesComponent。
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//添加默认路由，这个路由会把一个与空路径‘完全匹配’的URL 重定向到路径为 ‘/dashboard’ 这个url
  { path: 'detail/:id', component: HeroDetailComponent }//导航到英雄详情页 （:) 表示 :id 是一个占位符，表示某个特定英雄的id
]

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: [],
  imports: [ RouterModule.forRoot(routes) ],//初始化路由器，让其开始监听浏览器中的地址变化
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
