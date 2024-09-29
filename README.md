# 💎 原生Three 和 Cesium 案例 - 不断更新 - 只做开源 -

##  开源不易 - ⭐ - 点星助力,你的爱心就是我的动力！！谢谢

加入仓库一起管理 联系🐧QQ             |  🐧QQ群         
:-------------------------:|:-------------------------:
2945853209  |  131995948  



## Web3D+GIS开源社区平台！
- 更多多案例分享和教程 https://threelab.cn/

- 官网预览 https://threelab.cn/public/index.html#/example

## 🌳 案例
<img src="https://www.threelab.cn/cdn/images/threelab.png"  alt="官网实例">
<img src="https://www.threelab.cn/cdn/images/3dEarth.png"  alt="酷炫地图">
<img src="https://www.threelab.cn/cdn/images/xzq.png"  alt="行政区效果">

<img src="/public/threeExamples/openSource/screenshoot.gif" alt="screenshoot" style="zoom:30%; float: left;" />


## 🏠 国内镜像
https://gitee.com/giser2017/threelab-threejs-webgpu-vue-js

## 🏠 国外镜像
https://github.com/AivoGenX/threelab-threejs-webgpu-vue-js



## 📦 拷贝到自己网站

1.可通过 config/links 文件修改 所有的链接和 logo, 替换成自己的官网或者链接地址。

2.如在 https://threelab.cn/ 部署
<div>
<img src="https://gitee.com/giser2017/threelab-threejs-webgpu-vue-js/raw/main/public/files/images/qq.jpg" width="300" height="400" alt="QQ" style="zoom:50%; float: left;">
<img src="https://gitee.com/giser2017/threelab-threejs-webgpu-vue-js/raw/main/public/files/images/qqq.jpg" width="300" height="400" alt="QQ群" alt="QQ" style="zoom:50%;">
<div>

##### - 开发 如果只修改了 public 里面得内容，没修改src 内容则不需要打包, 如果需要打包手动删除 public/assets 目录

1. 创作者可以在 public/config/author.js 录入你的开发者信息,然后你提交的案例关联上id 就会展示作者信息。

2. 将案例js放入到public目录下的cesiumExamples/threeExamples 中的文件夹中 如threeExamples/basic中放入 test.js, test.jpg, 或者目录test[test.js, test.jpg]

3. 在config目录下 找到threeExamples 录入案例信息, 内部的资源指向与你的 js 和 image 资源路径对应

4. 注: 为保证轻量化 案例展示图片资源使用 - https://yasuo.xunjiepdf.com/img/  _(自定义压缩至4k以内)_

5. 涉及其他依赖js,可将module.js 放到public/js目录  如 dat.gui,gasp ,注入方式 config.js 可见

6. 音视频模型存储等一些可以公用的资源 public/files 文件夹下 为了保证存储库大小尽量缩小到5M以内

- assets 打包后目录
- config  js注入和配置案例信息目录
- files 音视频模型存储等一些可以公用的资源
- js dat.gui gsap three官方源码 cesium官方源码
- threeExamples three.js 案例代码目录
- cesiumExamples cesium 案例代码目录

```js
{
    id: '父级列表唯一id',
    name: '名称',
    author: '作者id',
    codeUrl: '/threeExamples/basic/test.html',
    image: '/threeExamples/basic/test.jpg',
    meta: {
        title: '此案例网站标题',
        keywords: '搜索引擎关键字',
        description: '此案例页面描述'
    }
}
```

## 🏠 搭建自己的分布式存储仓库

- 架构设计是以请求资源形式访问代码,所以如 codeUrl image, 等资源信息不局限于存储在 本仓库中，例如存储在你自己的服务器，然后url 访问到你的资源地址即可。

- 然后在此仓库仅配置 案例信息即可, 可参考 three案例 => 扩展功能 => 3D 地图 案例的配置

- 注 由于 github 访问限制 http 会被自动禁止, 建议 也搭建自己得github page ,使用 github 充当自己的资源服务器。

- 如：我的一些分布式资源存储在 https://github.com/AivoGenX/Web3dExamples 仓库下 —— 访问服务: https://AivoGenX.github.io/Web3dExamples/

- github page 搭建  => 创建仓库 => 页面流程 => setting => pages => Build and deployment => source (depoly from a branch) => branch 选择对应分支

- 注： github page 搭建完成后 直接访问 如 https://xxxx.github.io/xxxx/ 下的资源文件无法显示是正常现象, 在代码中可正常获取
 

