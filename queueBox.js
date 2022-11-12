function paveBox(boxes) {
  // TODO: 여기에 코드를 작성합니다.
  let firstNum = 0
  let outNum = []
  let maxCount = 0

  while(boxes.length > 0){
    firstNum = boxes[0];

    for(let num of boxes){
      if(num <= firstNum){
        outNum.push(num)
      } else {
        break
      }
    }

    boxes = boxes.slice(outNum.length)

    if(maxCount < outNum.length){
      maxCount = outNum.length
    }
    outNum = []
  }
  return maxCount
}












/*
function paveBox(boxes) {
  let maxNum = 0
  let count

  while(boxes.length !== 0){
    count = 1
    for(let i = 1; i < boxes.length; i++){
      if(boxes[i] <= boxes[0]){count = count + 1} 
      else {break}
    }
    if(maxNum < count) {maxNum = count}
    boxes = boxes.splice(count)
  }
  return maxNum 
}
*/