const ary = [2,4,3,1,9,6,8,7,5]

function selectionSort(arr){
  const retAry = [...arr]
  for(let i=0; i<retAry.length; i++){
    let minIndex = i

    // 한개를 제외한 나머지 중에서 가장 작은 수를 찾음
    for(let j=i+1; j<retAry.length; j++){
      if(arr[minIndex] > retAry[j]){
        minIndex = j
      }
    }

    // 찾은 가장 작은 수와 현재 값의 위치를 변경 (Swap)
    let temp = retAry[i]
    retAry[i] = retAry[minIndex]
    retAry[minIndex] = temp
  }

  return retAry
}

console.log(selectionSort(ary))

let arr30000 = Array.from({length:30000}, () => Math.floor(Math.random()*1000))

let startTime = new Date().getTime()
console.log(selectionSort(arr30000))
let endTime = new Date().getTime()
console.log('선택 정렬 소요시간', endTime-startTime, 'ms')

