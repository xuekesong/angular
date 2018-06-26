#使用angular-cli构建angular项目

1.安装angular-cli<br/>
  &nbsp;&nbsp;更新到最新的angular/cli version<br/>
  &nbsp;&nbsp;npm uninstall -g angular-cli<br/>
  &nbsp;&nbsp;npm cache clean --force <br/>
  &nbsp;&nbsp;npm install -g @angular/cli@next<br/>
2.创建新文件（路径上不能有中文）--创建新文件之后在新文件名之下会出现一系列的目录<br/>
  &nbsp;&nbsp;ng new 新文件名<br/>
3.查看端口并运行文件，自动打开网页<br/>
  &nbsp;&nbsp;cd 新文件名(进入新建文件的目录下)<br/>
  &nbsp;&nbsp;ng serve -o(或在package.json里面做修改设置) --port XXXX指定端口号（否则默认4200）<br/>
4.项目文件概览<br/>
  &nbsp;&nbsp;所有的Angular组件、模版、样式、图片以及应用所需的任何东西都在src文件中，src之外的文件都是为构建应用提供支持用的。<br/>
5.src文件夹<br/>
  <ul>
    <li>app/app.component.{ts,html,css,spec.ts}<br/>使用HTML模板、CSS样式和单元测试定义AppComponent组件。 它是根组件，随着应用的成长它会成为一棵组件树的根节点。</li>
    <li>app/app.module.ts<br/>定义AppModule，这个根模块会告诉Angular如何组装该应用。 目前，它只声明了AppComponent。 稍后它还会声明更多组件。</li>
    <li>assets/*<br/>这个文件夹下你可以放图片等任何东西，在构建应用时，它们全都会拷贝到发布包中。</li>
    <li>environments/*<br/>这个文件夹中包括为各个目标环境准备的文件，它们导出了一些应用中要用到的配置变量。 这些文件会在构建应用时被替换。</li>
    <li>index.html<br/>这是别人访问你的网站是看到的主页面的HTML文件。 大多数情况下你都不用编辑它。 在构建应用时，CLI会自动把所有js和css文件添加进去，所以你不必在这里手动添加任何 "script" 或 "link" 标签。</li>
    <li>main.ts<br/>这是应用的主要入口点。</li>
    <li>polyfills.ts<br/>不同的浏览器对Web标准的支持程度也不同。 填充库（polyfill）能帮我们把这些不同点进行标准化。</li>
    <li>styles.css<br/>这里是你的全局样式。</li>
    <li>test.ts<br/>这是单元测试的主要入口点。 它有一些你不熟悉的自定义配置，不过你并不需要编辑这里的任何东西。</li>
    <li>tsconfig.json<br/>TypeScript编译器的配置文件。</li>
  </ul>
6.其他文件<br/>
  <ul>
    <li>e2e/<br/>在e2e/下是端到端（end-to-end）测试</li>
    <li>.angular-cli.json<br/>Angular CLI的配置文件。 在这个文件中，我们可以设置一系列默认值，还可以配置项目编译时要包含的那些文件。</li>
    <li>.editorconfig<br/>给你的编辑器看的一个简单配置文件，它用来确保参与你项目的每个人都具有基本的编辑器配置。</li>
    <li>karma.conf.js<br/>给<a href="https://karma-runner.github.io/1.0/config/configuration-file.html">Karma</a>的单元测试配置，当运行ng test时会用到它。</li>
    <li>protractor.conf.js<br/>给<a href="http://www.protractortest.org/#/">Protractor</a>使用的端到端测试配置文件，当运行ng e2e的时候会用到它。</li>
    <li>tsconfig.json<br/>TypeScript编译器的配置，你的IDE会借助它来给你提供更好的帮助。</li>
    <li>tslint.json<br/>给<a href="https://palantir.github.io/tslint/">TSLint</a>和<a href="https://www.npmjs.com/package/codelyzer">Codelyzer</a>用的配置信息，当运行ng lint时会用到。 Lint功能可以帮你保持代码风格的统一。</li>
  </ul>
7.创建新的component并自动加入<br/>
  &nbsp;&nbsp;ng generate component 名称 --inline-template --inline-style<br/><br/>可以缩写为 : ng g c 名称 -it -is<br/>其中 -it 和 -is 分别表示html和css都写在js内<br/>
8.根模块app.module.ts<br/>
  <div style="border: 1px solid #eee;width: 300px;height:300px;">
    <p>"import { BrowserModule } from '@angular/platform-browser';"</p>
    <p>"import { NgModule } from '@angular/core';"</p>
    <p>"import { FormsModule } from '@angular/forms';"</p>
    <p>"import { HttpModule } from '@angular/http';"</p>
    <p>"import { AppComponent } from './app.component';"</p>
    <p>"import { LoginComponent } from './login/login.component';"</p>

    @NgModule({
      declarations: [//声明顶层组件
        AppComponent,
        LoginComponent
      ],
      imports: [//辅助模块
        BrowserModule, //浏览器的必备服务和指令
        FormsModule, //表单处理和双向绑定
        HttpModule //Http请求和响应的服务
      ],
      providers: [],//本模块中注入的服务
      bootstrap: [AppComponent]//作为引导性组件,放入index.html的对应位置
    })
    export class AppModule { }
  </div>
9.添加事件<br/>
   <div style="border: 1px solid #eee;width:300px;height:100px;">&lt;form&gt;
    <span>
      <span>&lt;<span class="hljs-name">input</span> 
      <span class="hljs-attr">type</span>=<span class="hljs-string">'text'</span> #<span class="hljs-attr">usernameRef</span>&gt;
    </span>
    <span class="hljs-tag">&lt;
      <span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">'hello(usernameRef.value)'</span>&gt;</span>submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;
    </span>
    <span class="hljs-tag">&lt;/
      <span class="hljs-name">form</span>&gt;</span>
    </span>
  </div>
  &nbsp;&nbsp;#usernameRef称为引用<br/>
10.创建新的service并自动加入<br/>
  &nbsp;&nbsp;ng g s core\auth<br/>
11.使用DI（依赖性注入）<br/>
12.subscribe用来观测数据<br/>
  <div>
    getStudyTime(userId){
      this.trainService.findStudyTime(userId)
      .subscribe(result=>{
        this.trainList=result;
        loading.dismiss();
      })
    }
  </div>