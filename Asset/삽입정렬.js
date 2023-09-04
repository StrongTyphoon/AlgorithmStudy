const ary = [2,4,3,1,9,6,8,7,5]

function insertionSort(arr){
  const retAry = [...arr]
  for(let i=1; i<retAry.length ; i++){
    // 현재 값이 왼쪽 값 보다 작다면 계속 바꿔가기
    for(let j=i; j>0; j--){
      if(retAry[j] < retAry[j-1]){
        let temp = retAry[j]
        retAry[j] = retAry[j-1]
        retAry[j-1] = temp
      }else{
        // 자기보다 작은 데이터를 멈추면 그 위치에서 멈춤
        break
      }
    }
  }
  return retAry
}

console.log(insertionSort(ary))

// 이미 정렬된 Best 케이스
let arr30000 = Array.from({length:30000}, () => 7)
let startTime = new Date().getTime()
console.log(insertionSort(arr30000))
let endTime = new Date().getTime()
console.log('삽입 정렬 소요시간', endTime-startTime, 'ms') // 4ms

