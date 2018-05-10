# av

### 思路
1 基础配置，用webpack4实现大部分基础打包功能；后续考虑尝试使用parcel。
2 加入react ssr（这一步可能后面需要细分）

### 需求准备

开发模式下：

1 热加载（没它开发会累哭）   
2 能与后台交互时的解决跨域问题   

生产模式下：

1.能把 react 模块分开   
2.能自动将生成 js 文件绑定到 html 页面   
3.压缩 js、css 代码     
4.想要使用 ant design 开发，但是 antd 样式文件较大，能够按需加载    

通用的：

使用 es6、jsx 语法    
能生成 map 文件   
能加载各种文件：json，图片，字体，css，scss，less   
找路径不要那么麻烦的使用 '../../' 之类的，能直接从项目跟路径找。    
命令能够兼容 linux 或者 windows   
使用 eslint 进行代码检查   
使用 esformatter 进行代码格式化   
能自动处理 css 样式兼容性问题    
 
### todo
1. tree shaking
