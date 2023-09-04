/* 이진탐색 알고리즘의 사용
정렬된 배열에서 특정 범위에 해당하는 원소의 개수 구하기

lowerBound() 함수와 upperBound() 함수 사용
lowerBound(arr, x): 정렬된 순서를 유지하며 배열 arr에 x를 넣을 가장 왼쪽 인덱스
upperBound(arr, x): 정렬된 순서를 유지하며 배열 arr에 x를 넣을 가장 오른쪽 인덱스

어려운데.. 이해가 잘 안되네 다시 공부해보자
*/

function lowerBound(arr, target, start, end){
  while(start < end){
    let mid = Math.floor((start+end)/2)
    // 탐색범위를 왼쪽으로 계속 미룸
    if(arr[mid] >= target) end = mid
    // 탐색 범위를 벗어나면 오른쪽으로
    else start = mid + 1
  }
  return end
}

function upperBound(arr, target, start, end){
  while(start < end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid] > target) end = mid
    else start = mid + 1
  }
  return end
}

const arr = [1,2,2,3,5,5,5,5,6,6,7,8,10,15]
console.log(lowerBound(arr, 5, 0, arr.length-1))
console.log(upperBound(arr, 5, 0, arr.length-1))