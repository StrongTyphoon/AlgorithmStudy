// 1. 미드 값과 타겟 값을 비교
// 2. 미드의 값이 타겟 값 보다 더 크다면 start ~ mid -1 탐색
// 3. 미드의 값이 타겟 값 보다 더 작다면 mid + 1 ~ end 탐색
// 4. 값이 같다면 리턴
// 5. start>end 라면 못 찾는 경우

// 이진 탐색 소스코드 구현(재귀 함수)
function binarySearch(arr, target, start, end){
  // 값을 못 찾은 경우
  if(start > end) return -1

  let mid = Math.ceil((start+end)/2)
  // 찾은 경우 인덱스를 반환
  if(arr[mid] == target) return mid
  // mid 값보다 찾는 값이 더 작을 경우, left부터 mid-1까지 탐색
  else if(arr[mid] > target) return binarySearch(arr, target, start, mid-1)
  // mid 값보다 찾는 값이 더 클 경우 mid+1부터 right 까지 탐색
  else if(arr[mid] < target) return binarySearch(arr, target, mid+1, end)
}

let target = 19
let arr = [1,3,5,7,9,11,13,15,17,19]

let result = binarySearch(arr, target, 0, arr.length-1)
if(result === -1) console.log('원소가 존재하지 않는다.')
else console.log(result,'번째 원소')

// 이진 탐색 소스코드 구현(반복문)
function binarySearch2(arr, target, start, end){
  while(start<=end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid] == target) return mid
    // mid 값보다 찾는 값이 더 작을 경우, left부터 mid-1까지 탐색
    else if(arr[mid] > target) end = mid - 1 
    // mid 값보다 찾는 값이 더 클 경우 mid+1부터 right 까지 탐색
    else if(arr[mid] < target) start = mid + 1
  }
  return -1
}

let result2 = binarySearch2(arr, target, 0, arr.length-1)
if(result2 === -1) console.log('원소가 존재하지 않는다.')
else console.log(result2,'번째 원소')