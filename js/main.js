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
    background-color: rgb(217,217,217); 
    padding: 30px;
  } 

  #code{
    border:1px rgb(170,170,170) solid; 
  }

  /*下面給字体来些高亮，让您看上去更舒服些*/
  .token.function{
    color: #DD4A68
  }

  .token.property{
    color: #905
  }

  .token.punctuation{
    color: #999
  }

  .token.selector{
    color: #690;
  }

  /*给它加点特效吧*/
  #code{
    animation: breath 0.5s infinite alternate-reverse;
  } 
  `
  var result2 = `/*下面开始写我的简历，首先我需要一张白纸让它在页面的右边*/
  #code{
    width: 50%;
    height: 100vh;
    margin-right: 30px;
  }

  #paper{
    height: 100vh;
    width: 50%;
    background:white;
  }
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

function markDown(md) {
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

    }
  }, 0)
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
  }, 0)
}


writeCode('', result, () => {
  createPaper()
  writeCode(result, result2, () => {
    markDown(md)
  })
})


function createPaper() {
  var paper = document.createElement('div')
  document.body.appendChild(paper)
  paper.id = 'paper';
}
