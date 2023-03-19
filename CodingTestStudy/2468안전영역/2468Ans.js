//https://tesseractjh.tistory.com/188
const input = require('fs').readFileSync('./2468안전영역/input.txt').toString().trim().split('\n');
const N = +input[0];
const areas = input.slice(1).map(v => v.split(' ').map(v => +v));
// for문을 사용하지 않고 input의 1번째부터 끝까지 슬라이싱 한 배열을 map을 이용하여 Number로 바꾼다

const offsetX = [0, 0, -1, 1];
const offsetY = [-1, 1, 0, 0];

const dfs = (x, y, height, visited) => {
  offsetX.forEach((dx, i) => {
    const nx = x + dx;
    const ny = y + offsetY[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
      visited[nx][ny] = true;
      dfs(nx, ny, height, visited);
    }
  });
};

let maxCount = 0;

// height 보다 작은 것들은 true로 저장한 visit 이중배열 나는 이걸 배열 두개로 나눴었는데
// 여기서 시간이 갈린거 같다.
// 함수 function을 사용한 dfs였다.
for (let height = 0; height <= 100; height++) {
  let count = 0;
  const visited = [...Array(N)].map((_, x) => [...Array(N)].map((_, y) => areas[x][y] <= height));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        dfs(i, j, height, visited);
        count++;
      }
    }
  }
  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);