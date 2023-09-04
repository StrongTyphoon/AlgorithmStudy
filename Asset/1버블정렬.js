const ary = [2,4,3,1,9,6,8,7,5]

function bubbleSort(arr){
  const retAry = [...arr]

  // i는 정렬이 된 가장 큰 원소를 나타내는 위치
  for(let i=retAry.length-1; i>0; i--){
    for(let j=0; j<i; j++){
      if(retAry[j] > retAry[j+1]){ 
        let temp = retAry[j]
        retAry[j] = retAry[j+1]
        retAry[j+1] = temp
      }
    }
  }
  return retAry
}

console.log(bubbleSort(ary))