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
    background-color: rgb(20,60,60); 
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
    transform: rotateY(15deg) translateZ(-100px) ;
  } 
  `
var result2 = `
  /*下面开始写我的简历，首先我需要一张白纸让它在页面的右边*/
  #code{
    width: 50%;
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
  我叫倪凡

  年龄：24

  来自武汉纺织大学

  自学前端半年

  主要项目： 
      1.导航
      2.个人画板
      3.简历
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


function markDown(md, fn) {
  var pre = document.createElement('pre')
  paper.appendChild(pre)
  var content = document.querySelector('#paper>pre')
  n = 0
  var id = setInterval(() => {
    n++
    content.innerHTML = md.substring(0, n)
    content.scrollTop = content.scrollHeight;
    if (n >= md.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 50)
}


function writeCode(preResult, result, fn) {
  document
  var code = document.querySelector('#code')
  n = 0
  var id = setInterval(() => {
    n++
    code.innerHTML = Prism.highlight(preResult + result.substring(0, n), Prism.languages.css, 'css');
    code.scrollTop = code.scrollHeight;
    style.innerHTML = preResult + result.substring(0, n);
    if (n >= result.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 50)
}


writeCode('', result, () => {
  createPaper()
  writeCode(result, result2, () => {
    markDown(md, () => {
      writeCode(result + result2, result3, () => {
        markdownToHTML()
        writeCode(result + result2 + result3, result4, () => {

        })
      })
    })
  })
})


function createPaper() {
  var paper = document.createElement('div')
  document.body.appendChild(paper)
  paper.id = 'paper';
}


function markdownToHTML() {
  var content = document.querySelector('#paper>pre')
  div = document.createElement('div');
  paper.replaceChild(div, content)
  paper.appendChild(div);
  div.innerHTML = marked(`
  <h1>我叫倪凡</h1>
  <p>年龄：24</p>
  <p>来自武汉纺织大学</p>
  <p>自学前端半年</p>
  <hr style>
  <ol>
  <h3>主要项目:</h3> 
      <li><a href="https://nifan950624.github.io/kbd-demo/" target="_blank">导航</a></li>
      <li><a href="https://nifan950624.github.io/canvas-demo/" target="_blank">个人画板</a></li>
      <li><a href="" target="_blank">简历></a></li>
  </ol>
  `)

}