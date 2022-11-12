function browserStack(actions, start) {
  // TODO: 여기에 코드를 작성합니다.
  if(typeof start !== 'string'){
    return false
  }

  let now = start
  let prev = []
  let next = []

  for(let el of actions){
    if(typeof el === 'string'){
      prev.push(now)
      now = el
      next = []
    }
    else if(el === -1 && prev.length !== 0){
      next.push(now)
      now = prev.pop()
    }
    else if(el === 1 && next.length !== 0){
      prev.push(now)
      now = next.pop()
    }
  }
  const result =[prev, now, next]
  return result
}










/*
function browserStack(actions, start) {
  // TODO: 여기에 코드를 작성합니다.
  if(typeof start !== 'string'){
    return false
  }

  let prev = [];
  let next = [];
  let now = start;

  //for문을 돌려서 
  //actions의 요소가 문자면
  for(let i=0; i<actions.length; i++){
    //현재페이지를 prev에 넣고, action의 요소를 현재페이지로 한다.
    if(typeof actions[i] === 'string'){
      prev.push(now)
      now = actions[i]
      next = []

    } else if(actions[i] === -1 && prev.length > 0){
      next.push(now)
      now = prev.pop()

    } else if(actions[i] === 1 && next.length > 0){
      prev.push(now)
      now = next.pop()
    }
    //숫자면 -1일때 prev의 맨 위 요소를 현재페이지로하고 현재페이지를 next 맨 위에 넣는다
  }
  const result = [prev, now, next]
  return result 
  //1이면 현재페이지를 prev의 맨 위에 넣고, next의 맨 위 요소를 현재페이지로 한다.
}*/