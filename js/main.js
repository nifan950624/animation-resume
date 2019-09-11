var result = `
  /*
  *面试官你好，
  *我是面试人员倪凡，
  *下面我将以自动生成
  *代码的形式来展现我的简历
  */

  *{
    transition : all 1s;
  }

  /*我们背景太单调了，给背景一个颜色吧*/
  body{
    padding: 30px;  
    color: white;
    background-color: rgb(0,40,40); 
  } 

  #code{
    border:1px rgb(170,170,170) solid; 
  }

  /*下面給字体来些高亮，让您看上去更舒服些*/
  .token.selector{
    color: #690;
  }

  .token.punctuation{
    color: #999
  }

  .token.property{
    color: rgb(157,122,9)
  }

  .token.function{
    color: #DD4A68
  }

  /*给它加点特效吧*/
  body{
    perspective: 1000px;
  }

  #code{
    animation: breath 0.5s infinite alternate-reverse;
    transform: translateX(30px) rotateY(15deg) translateZ(-150px);
    width: 50%;
  } 
  `
var result2 = `
  /*下面开始写我的简历，首先我需要一张白纸让它在页面的右边*/
  #code{
    height: 100%;
    margin-right: 30px;
  }

  #paper{
    height: 100%;
    width: 50%;
    background:white;
  }
  
  /*好了我可以在上面写字了*/
  `

var md = `
Web前端程序员简历模板

本简历模板由国内首家互联网人才拍卖网站「 [JobDeer.com](http://www.jobdeer.com) 」提供。

（括号里的是我们的顾问编写的说明，建议在简历书写完成后统一删除）

## 先讲讲怎样才是一份好的技术简历

首先，一份好的简历不光说明事实，更通过FAB模式来增强其说服力。

 - Feature：是什么
 - Advantage：比别人好在哪些地方
 - Benefit：如果雇佣你，招聘方会得到什么好处 

其次，写简历和写议论文不同，过分的论证会显得自夸，反而容易引起反感，所以要点到为止。这里的技巧是，提供论据，把论点留给阅读简历的人自己去得出。放论据要具体，最基本的是要数字化，好的论据要让人印象深刻。

举个例子，下边内容是虚构的：

2006年，我参与了手机XX网发布系统WAPCMS的开发。作为核心程序员，我不但完成了网站界面、调度队列的开发工作，更提出了高效的组件级缓存系统，通过碎片化缓冲有效的提升了系统的渲染效率。

有同学问，如果我在项目里边没有那么显赫的成绩可以说怎么办？讲不出成绩时，就讲你的成长。因为学习能力也是每家公司都看中的东西。你可以写你在这个项目里边遇到了一个什么样的问题，别人怎么解决的，你怎么解决的，你的方案好在什么地方，最终这个方案的效果如何。

具体、量化、有说服力，是技术简历特别需要注重的地方。

（以上内容在写完简历后，对每一段进行评估，完成后再删除）

---


# 联系方式
（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）

- 手机：135********

---
  `

var result3 = `
  /*
  *喔喔，好像还差点什么
  *这个是markdown呀
  *下面我将使用marked的库将我的
  *简历转化成HTML格式
  */
  `

var result4 = `
  /*
  *已经转化成功了，下面来给他写些样式*/
  #paper>div{
    padding:20px;
  }

  #paper>div>p,
  #paper>div>h1,
  #paper>div ol li,
  #paper>div ol h3{
    padding:10px 0
  }
  `
var time = 50

$(".btns").on("click", "button", function(e) {
	let $button = $(e.currentTarget)
	let speed = $button.attr("data")
	$($button)
		.css({ transition: "all 0.35s" })
		.addClass("active")
		.siblings()
		.removeClass("active")
	switch (speed) {
		case "slow":
			time = 100
			break
		case "normal":
			time = 50
			break
		case "fast":
			time = 0
			break
	}
})

function markDown(md, fn) {
	var pre = document.createElement("pre")
	paper.appendChild(pre)
	var content = document.querySelector("#paper>pre")
	n = 0
	var id = setTimeout(function run() {
		n++
		content.innerHTML = md.substring(0, n)
		content.scrollTop = content.scrollHeight
		if (n <= md.length) {
			setTimeout(run, time)
		} else {
			fn && fn.call()
		}
	}, time)
}

function writeCode(preResult, result, fn) {
	document
	var code = document.querySelector("#code")
	n = 0
	var id = setTimeout(function run() {
		n++
		code.innerHTML = Prism.highlight(
			preResult + result.substring(0, n),
			Prism.languages.css,
			"css"
		)
		code.scrollTop = code.scrollHeight
		style.innerHTML = preResult + result.substring(0, n)
		if (n <= result.length) {
			setTimeout(run, time)
		} else {
			fn && fn.call()
		}
	}, time)
}

writeCode("", result, () => {
	createPaper()
	writeCode(result, result2, () => {
		markDown(md, () => {
			writeCode(result + result2, result3, () => {
				markdownToHTML()
				writeCode(result + result2 + result3, result4)
			})
		})
	})
})

function createPaper() {
	var paper = document.createElement("div")
	document.body.appendChild(paper)
	paper.id = "paper"
}

function markdownToHTML() {
	var content = document.querySelector("#paper>pre")
	div = document.createElement("div")
	paper.replaceChild(div, content)
	paper.appendChild(div)
	div.innerHTML = marked(`
 # Web前端程序员简历模板

本简历模板由国内首家互联网人才拍卖网站「 [JobDeer.com](http://www.jobdeer.com) 」提供。

（括号里的是我们的顾问编写的说明，建议在简历书写完成后统一删除）

## 先讲讲怎样才是一份好的技术简历

首先，一份好的简历不光说明事实，更通过FAB模式来增强其说服力。

 - Feature：是什么
 - Advantage：比别人好在哪些地方
 - Benefit：如果雇佣你，招聘方会得到什么好处 

其次，写简历和写议论文不同，过分的论证会显得自夸，反而容易引起反感，所以要点到为止。这里的技巧是，提供论据，把论点留给阅读简历的人自己去得出。放论据要具体，最基本的是要数字化，好的论据要让人印象深刻。

举个例子，下边内容是虚构的：

2006年，我参与了手机XX网发布系统WAPCMS的开发。作为核心程序员，我不但完成了网站界面、调度队列的开发工作，更提出了高效的组件级缓存系统，通过碎片化缓冲有效的提升了系统的渲染效率。

有同学问，如果我在项目里边没有那么显赫的成绩可以说怎么办？讲不出成绩时，就讲你的成长。因为学习能力也是每家公司都看中的东西。你可以写你在这个项目里边遇到了一个什么样的问题，别人怎么解决的，你怎么解决的，你的方案好在什么地方，最终这个方案的效果如何。

具体、量化、有说服力，是技术简历特别需要注重的地方。

（以上内容在写完简历后，对每一段进行评估，完成后再删除）

---


# 联系方式
（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）

- 手机：135********

---

# 个人信息

 - 胶布帝/男/1990 
 - 本科/萌鹿大学计算机系 
 - 工作年限：3年
 - 微博：

 - 期望职位：Web前端高级程序员，应用架构师
 - 期望薪资：税前月薪15k~20k，特别喜欢的公司可例外
 - 期望城市：北京

---

# 工作经历
（工作经历按逆序排列，最新的在最前边，按公司做一级分组，公司内按二级分组）

## ABC公司 （ 2012年9月 ~ 2014年9月 ）

### DEF项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### GHI项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### 其他项目

（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）

 
## JKL公司 （ 2010年3月 ~ 2012年8月 ）

### MNO项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### PQR项目 
我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### 其他项目

（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）

---

# 开源项目和作品
（这一段用于放置工作以外的、可证明你的能力的材料）

## 开源项目
（对于程序员来讲，没有什么比Show me the code能有说服力了）

 - [STU](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明
 - [WXYZ](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明

## 技术文章
（挑选你写作或翻译的技术文章，好的文章可以从侧面证实你的表达和沟通能力，也帮助招聘方更了解你）

- [一个产品经理眼中的云计算：前生今世和未来](http://get.jobdeer.com/706.get)
- [来自HeroKu的HTTP API 设计指南(翻译文章)](http://get.jobdeer.com/343.get)

## 演讲和讲义
（放置你代表公司在一些技术会议上做过的演讲，以及你在公司分享时制作的讲义）

  - 2014架构师大会演讲：[如何通过Docker优化内部开发](http://jobdeer.com)
 - 9月公司内部分享：[云计算的前生今世](http://jobdeer.com)

# 技能清单
（我一般主张将技能清单写入到工作经历里边去。不过很难完整，所以有这么一段也不错）

以下均为我熟练使用的技能

- Web开发：PHP/Hack/Node
- Web框架：ThinkPHP/Yaf/Yii/Lavaral/LazyPHP
- 前端框架：Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic
- 前端工具：Bower/Gulp/SaSS/LeSS/PhoneGap
- 数据库相关：MySQL/PgSQL/PDO/SQLite
- 版本管理、文档和自动化部署工具：Svn/Git/PHPDoc/Phing/Composer
- 单元测试：PHPUnit/SimpleTest/Qunit
- 云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发

## 参考技能关键字

本技能关键字列表是从最近招聘Web前端的数百份JD中统计出来的，括号中是出现的词频。如果你的简历要投递给有机器（简历分选系统）和不如机器（不懂技术的HR）筛选简历环节的地方，请一定从下边高频关键词中选择5～10个适合你自己的。

- web(889)
- javascript(596)
- css(555)
- html(430)
- jquery(323)
- html5(312)
- js(311)
- ajax(196)
- css3(176)
- w3c(168)
- div(156)
- php(134)
- xhtml(106)
- java(92)
- ui(78)
- photoshop(75)
- dom(63)
- xml(56)
- json(54)
- yui(51)
- flash(45)
- bootstrap(43)
- python(43)
- http(38)
- dreamweaver(38)
- ext(33)
- linux(33)
- seo(32)
- prototype(29)
- chrome(28)
- pc(28)
- nodejs(28)
- firefox(26)
- ps(25)
- angularjs(25)
- fireworks(24)
- extjs(23)
- safari(22)
- www(22)
- mobile(22)
- jsp(22)
- mvc(22)
- backbone(21)
- node(21)
- ruby(20)
- github(19)
- ios(18)
- ie6(18)
- android(18)
- asp(18)
- sass(17)
- wap(16)
- mootools(16)
- ie(16)
- mysql(15)
- flex(14)
- firebug(13)
- bom(13)
- webapp(12)
- less(12)
- web2(11)
- angular(10)
- git(10)
- dw(10)
- as(10)
- mac(10)
- psd(8)
- o2o(7)
- dojo(7)
- actionscript3(6)
- grunt(5)
- ue(5)
- zepto(5)
- actionscript(5)
- ie8(5)
- coffeescript(5)
- django(4)




---

# 致谢
感谢您花时间阅读我的简历，期待能有机会和您共事。`)
}
