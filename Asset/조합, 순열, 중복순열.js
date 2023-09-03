/*
1. 선택하는 개수를 확인
2. 배열의 길이만큼 반복
3. 배열에서 하나의 수를 선택
4. 기준 값을 제외한 나머지 배열을 가지고 1번부터 시작
*/

// 참조 : https://mine-it-record.tistory.com/508

// 1. 조합 nCr : 중복없이, 순서에 상관없이 r개를 뽑는다.
// 예시 3C2 Input [1,2,3] Output [[1,2],[1,3],[2,3]]

// 3C2를 위해 [1,2,3] 과 2를 넣어준다.
const getCombinations = (arr,num) => {
  const results = [];
  
  // nC1은 1이므로 바로 반환한다.
  if(num === 1) return arr.map(v=>[v])

  // 차례대로 하나씩 지정하고, 나머지 부분을 돌린다
  arr.forEach((fixed, index, origin) => {
    // 조합에서는 중복이 되면 안되기에, 현재 값을 제외한 그 이후의 값을 슬라이싱
    const rest = origin.slice(index+1)

    // 나머지 배열을 기준으로 다시 조합을 실시
    // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 -1을 해준다
    const combinations = getCombinations(rest, num-1)

    // 기준값(fixed) 에 돌아온 조합(combinations)을 붙인다.
    const attached = combinations.map(v=>[fixed, ...v])

    // 붙인 값을 결과 값에 넣어준다
    results.push(...attached)
    
  })

  return results
}

console.log(getCombinations([1,2,3,4], 3))

// 사실 생각이 잘 안잡힌다 재귀구조가 잘 안잡혀
// 4C2 = 3C1 + 3C2




// 2. 순열 nPr : 중복없이 순서에 상관있게 r개의 원소를 뽑는다
// 예시 3P2 Input : [1,2,3], Output : [[1,2],[1,3],[2,1],[2,3],[3,1],[3,2]]

const getPermutations = (arr, num) => {
  const results = []

  if(num === 1) return arr.map(v=>[v])

  arr.forEach((fixed, index, origin) => {
    const rest = origin.filter(val => val !== fixed)
    const permutation = getPermutations(rest, num-1)
    const attached = permutation.map(v=>[fixed,...v])
    results.push(...attached)
  })

  return results
}

console.log(getPermutations([1,2,3,4], 2))


// 3. 중복순열 : nㅠr 중복을 허용하고, r개의 원소를 선택 나열
// Input: [1,2,3] => output : [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]

const getPiPermutations = (arr, num) => {
  const results = []
  if(num === 1) return arr.map(v=>[v])

  arr.forEach((fixed, index, origin) => {
    const permutations = getPiPermutations(origin, num-1)
    const attached = permutations.map(ary=>[fixed, ...ary])
    results.push(...attached)
  })

  return results
}

console.log(getPiPermutations([1,2,3,4], 2))