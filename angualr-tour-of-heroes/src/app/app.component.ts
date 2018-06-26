import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//组件的选择器（CSS元素选择器）
  templateUrl: './app.component.html',//组件模版文件的位置
  styleUrls: ['./app.component.css']//组件私有CSS样式表文件的位置
})
export class AppComponent {
  title = 'Tour of heroes';
}
