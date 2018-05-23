#使用angular-cli构建angular项目

1.安装angular-cli<br/>
  更新到最新的angular/cli version<br/>
  npm uninstall -g @angular/cli<br/>
  npm cache verify <br/>
  npm install -g @angular/cli@next<br/>
2.创建新文件（路径上不能有中文）--创建新文件之后在新文件名之下会出现一系列的目录<br/>
  ng new 新文件名<br/>
3.查看端口并运行文件，自动打开网页<br/>
  cd 新文件名(进入新建文件的目录下)<br/>
  ng serve -o(或在package.json里面做修改设置) --port XXXX指定端口号（否则默认4200）<br/>
4.项目文件概览<br/>
  所有的Angular组件、模版、样式、图片以及应用所需的任何东西都在src文件中，src之外的文件都是为构建应用提供支持用的。<br/>
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