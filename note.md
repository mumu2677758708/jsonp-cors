## 同源策略
协议、域名、端口都一致表示同域
## 为什么浏览器不支持跨域
cookie LocalStorage都不支持跨域
DOM元素也有同源策略  iframe
ajax也不支持跨域

## 
- <link rel="stylesheet" href="">
- <img src="" alt="">
- <script src=""></script>
都可以实现跨域,都不受同源策略，都是可以引用一些线上的资源


## 实现跨域的方法
- jsonp
- cors  后端配置
- postMessage+iframe 两个页面之间
- window.name
- document.domain
- location.hash
- http-proxy
- nginx
- websocket

## 1.jsonp
- 创建一个script标签，将js文件引进来
- 在百度页面中，输入框中输入内容，network中会有很多没用的请求，其实就是jsonp请求 调用https://www.baidu.com/sugrec?&prod=pc&wd=ab&cb=show这个接口，其实就是调用全局中的show方法（cb=方法名）

## 2.cors
- 主要在服务端进行配置

## 3.postMessage + iframe
- 页面之间的通信

## 4.window.name
- a和b是同域的 http://localhost:3000
- c是独立的 http://localhost:4000
- a获取c的数据
- a先引用c，c把值放到window.name，把a引用的地址改成b

## 5.location.hash
- 路径后面的hash值可以用来通信
- 目的是：a想访问c
- a给c传一个hash值，c收到hash值后，c把hash传递给b, b将结果放到a的hash值中

## 6.document.domain
- 关系必须是：一级域名和二级域名  www.baidu.com(一级域名)   video.baidu.com(二级域名)
- a是通过http://a.zf1.cn:3000/a.html

## 7.websocket
