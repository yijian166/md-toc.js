md-toc.js
======

动态生成静态HTML页面目录，特别适合由markdown语法生成的页面(例如诸多静态博客文章)。

### 外网链接

在此提供在百度BAE上的地址，会保持最新，欢迎使用

```html
<script src="http://isprite.duapp.com/lib/md-toc.js"></script>
```

### 说明

扫描指定元素（文章内容）内`h1`~`h6`标签，再生成对应的嵌套目录列表。

-	根据文章结构层级，生成相应层级的目录。

-	目录实在页面加载之后动态生成，对搜索引擎无用因此链接hash值顺次排序

-	**无需手动编辑markdown文件，不违背md宗旨，又能增加文章阅读时候的便利性，增强体验**。

-	快速生成目录，不必等待大资源加载完成（document ready后），用户感觉不到延迟。
-	浏览器支持：IE8+，Chrome，Firefox，Opera，Safari。

###使用方法

在需要生成目录的元素内设置以下自定义属性，即可很方便的使用toc.js

-	`data-toc="true"`：如果想要生成目录，需要设置`data-toc`且赋值必须为`true`，建议文档中只设置一处，若有多处，只第一处生效；
-	`data-toc-class="toc"`：可选，此处定义目录元素的`class`值，若缺失则`class`默认为`toc`；
-	`data-toc-top="200"`：可选，此处做了简单的体验优化，设置了**非负值**时候，
	-	文档垂直滚动区域小余该值时：目录**`position:absolute`**，`top`为该值。横向定位属性(`left`或者`right`)，以及所需的定位依赖元素自行定义；
	-	文档垂直滚动超出该值后，目录**`position:fixed;top:10px`**,向定位属性(`left`或者`right`)自行定义；
	-	属性值最好不要带单位，只取里面的数字。


### Demo

[Demo:learn.hicc.me](http://learn.hicc.me/html-css/images-audio-video.html)




