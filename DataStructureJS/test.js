const graph = [
  [(2,7)],
  [(0,3), (2,8)],
  [(1,8)],
  [(2,4)]
]

console.log(graph)

// 방향/무방향 무가중치 그래프
const graph2 = {
  0: [2],
  1: [0,2],
  2: [1],
  3: [2]
}

console.log(graph2)

const map2 = new Map([0,])

// 방향/무방향 가중치 그래프
const graph3 = {
  0: [[2,7]],
  1: [[0,3],[2,8]],
  2: [[1,8]],
  3: [[2,4]]
}

console.log(graph3)