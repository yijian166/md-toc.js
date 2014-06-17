md-toc.js
======

动态生成静态HTML页面目录，特别适合由markdown语法生成的页面(例如诸多静态博客文章)。

### 使用

在此提供在百度BAE上的地址，会保持最新，欢迎使用:)

```html
<aside id="toc"></aside>
<div id="post">
	<h1><h1>
	……	
	<h2><h2>
	……	
	<h1><h1>
	……	
</div>
```

```html
<script src="http://isprite.duapp.com/lib/md-toc.js"></script>
<script type="text/javascript">
    new Toc('post',options);
</script>
```

-	`id`：为需要生成目录的包裹元素的`id`值，必填。
-	`options`：中可以添加三个参数，可选，可以不传。
	-	`level`：此处定义目录的层级，如果文档标题较多，层级较深，在此可以设置层级数来不现实一些小标题，缺省，0或者大于6的值则处理为标题全部添加；
	-	`class`：此处定义目录元素的`class`值，若缺失则`class`默认为`toc`
	-	`top`：此处做了简单的体验优化，设置了**非负值**时候，
		-	文档垂直滚动区域小余该值时：目录**`position:absolute`**，`top`为该值。横向定位属性(`left`或者`right`)，以及所需的定位依赖元素自行定义；
		-	文档垂直滚动超出该值后，目录**`position:fixed;top:10px`**,向定位属性(`left`或者`right`)自行定义；
		-	属性值最好不要带单位，只取里面的数字。
	- 	`targetId`: 定义生成的TOC追加到哪个容器，即目录生成的位置，不写默认追加到`id`对应的
	
示例：

```html
<script type="text/javascript">
    new Toc( 'post',{
        'level':3,
        'top':200,
        'class':'toc',
        'targetId':'toc'
    } );
</script>
```

### 说明

扫描指定元素（文章内容）内`h1`~`h6`标签，再生成对应的嵌套目录列表。

-	根据文章结构层级，生成相应层级的目录。

-	目录实在页面加载之后动态生成，对搜索引擎无用因此链接hash值顺次排序

-	**无需手动编辑markdown文件，不违背md宗旨，又能增加文章阅读时候的便利性，增强体验**。

-	浏览器支持：IE8+，Chrome，Firefox，Opera，Safari。



###注意

-   请务必保证页面的标题层次的正确性，否则会生成错误的目录结构


### Demo

[Demo:learn.hicc.me](http://learn.hicc.me/html-css/images-audio-video.html)




