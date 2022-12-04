
    // 1 打地鼠讲究随机性
    // 2 随机生成的洞中可以蹦出来鼠鼠
    // 3 蹦出来的老鼠持续出现多长时间/ 
    // 4 提供一个计时器，给你多长时间去打地鼠，也可以不给，时间到了地鼠不会再出去了
    // 5 需要有start按钮,重开游戏那种，打一个地鼠会得1分所以需要记录地鼠被打的次数
    // 1 地鼠每次出现随机时间
    // function
    // {
    //   返回 math.round(math.random()*(max-min)+min)
    // }
    // 随机洞用于出来老鼠,
    // function(holes){
    //   1一共有六个洞
    //   把每个div用数组表示
    //   const i=随机.holes,length
    //   const hole=holes[i]
    //   如果不想他们每次都出现相同的
    //   if（hole===lasthole）
    //   {
    //     return function
    //     重新再随机一遍
    //   }
    //   return hole
    // }
    // 出地鼠
    // function peep()
    // {
    //   const time=radomtime(200,1000)//设记地鼠出现时间
    // const hole=radomhole(holes)地鼠粗来的位置
    // hole.classList.add('up')添加一个up类
    // 用计时器
    // setoutime里面放上peep（），time
    // 如果时间没到继续peep（）
    // }
    // 开始游戏
    // {
    //   得分
    //   score=0
    //   timeup=flase
    //   需要有一场游戏的持续时间
    //   settimeout
    //   timeup,时间
    //   启动peep()函数

    // }
    // 打地鼠,打中了地鼠地鼠消蚀，然后得分加一
    // {
    //   this.parentNode.classList.remove('up')移除UP
    //   socre++
    // }
    // 最后每当mole被点击一次
    // 监听事件click，然后执行大地鼠函数

  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let previoushole
  let timeUp=false
  let score=0

  function randomtime(min,max)
  {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function randomhole(holes)
  {
  const idx=Math.floor(Math.random()*holes.length)
  const hole=holes[idx]
  let lasthole
  if(hole===lasthole)
  {
    randomhole(holes)
  }
  lasthole=hole;
  return lasthole;
  }
  function peep()
  {
    const time=randomtime(1000,2000)
    const hole=randomhole(holes)
    hole.classList.add('up')
    setTimeout(() => {
      hole.classList.remove('up')
      if(!timeUp)
      peep()
    }, time);
  }
  
  moles.forEach( mole=> {
      mole.addEventListener('click',hit)
    });
  function startgame()
  {
    scoreBoard.textContent=0
    timeUp=false
    score=0
   peep()
    setTimeout(() => timeUp=true,15000);
  }
  function hit(e)
  {
    if(!e.isTrusted)
    {
      console.log('cheat')
      return
    }
    this.parentNode.classList.remove('up')
    score++
    scoreBoard.textContent=score
  }
  moles.forEach(hole=>hole.addEventListener('click',hit))  
