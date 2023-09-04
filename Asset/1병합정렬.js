const ary = [2,4,3,1,9,6,8,7,5]
const sortedAry = new Array(ary.length).fill(0)
// left~mid, mid~right 까지의 배열을 비교하여 left ~ right의 배열을 리턴
function merge(arr, left, mid, right){
  let i = left
  let j = mid+1
  let k = left // 결과 배열의 인덱스

  // 크기 비교해서 작은쪽을 넣기
  while(i<=mid && j<=right){
    if(arr[i] <= arr[j]){
      sortedAry[k++] = arr[i++]
    }else{
      sortedAry[k++] = arr[j++]
    }
  }

  // 왼쪽 배열에 대한 처리가 다 끝난 경우
  if(i > mid){
    for(; j<= right; j++){
      sortedAry[k++] = arr[j++]
    }
  }else{ // 오른쪽 배열의 처리가 다 끝난 경우
    for(; i<=mid ; i++){
      sortedAry[k++] = arr[j++]
    }
  }
  
  for(let x=left; x<=right; x++){
    arr[x] = sortedAry[x]
  }
}

function mergeSort(arr, left, right){
  // 원소가 1개인 경우 left === right 이므로 정렬이 된 상태로 이해
  if(left < right){
    let mid = Math.floor((left + right) / 2)
    mergeSort(arr,left,mid)
    mergeSort(arr,mid+1,right)
    merge(arr, left, mid, right)

  }
}
mergeSort(ary, 0, ary.length-1)
console.log(sortedAry)