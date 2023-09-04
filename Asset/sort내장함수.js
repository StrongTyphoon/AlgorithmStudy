let arr = ['fineapple','banana','durian','apple','carrot']

// 문자열 내림차순 정렬
arr.sort((a,b)=>{
  if(a>b) return -1
  else if(a<b) return 1
  else return 0
})
console.log(arr)

// 대소문자 구분 없이 오름차순 정렬
function compare(a,b){
  let upperCaseA = a.toUpperCase()
  let upperCaseB = b.toUpperCase()
  if(upperCaseA < upperCaseB) return -1
  else if(upperCaseA > upperCaseB) return 1
  else return 0
}
