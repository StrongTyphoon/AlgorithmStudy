// 입력
const inp = require('fs').readFileSync('./14503로봇청소기/input.txt').toString().trim().split('\n')
const [N,M] = inp[0].split(' ').map(ele=>{return +ele})
const [startX,startY,startDir] = inp[1].split(' ').map(ele=>{return +ele})
const inpAry = inp.slice(2).map(ele=>{return ele.replaceAll('\r', '').split(' ').map(ele=>{return +ele})})  
const room = [...inpAry]

console.log(room)

// 제자리가 0일 경우 현재 자리 청소 후 2로 마킹 후 카운트 => 초기상태

// 제자리가 1일 때 주변 청소 가능한 자리 있는지 확인

// 있다면
// 앞방향이 0인지 확인
// 앞방향이 없으면 반시계로 회전 (최대 3번 반복)
// 앞방향이 0이면 전진 => 초기상태

// 없다면
// 방향 반대방향이 1이면 끝내고 아니면
// 반대 방향으로 한칸 이동

let cleanCnt = 0
const delta = [[0,-1],[1,0],[0,1],[-1,0]] // 0 이 북쪽, 1이 동쪽, 2가 남쪽 3이 서쪽

function checkState(x,y,dir){
    if(!room[y][x]){
        room[y][x] = 2  // 청소
        cleanCnt++
        console.log(x,y,'청소')
        return [x,y,dir]
    }
    else{
        // 4방향 중 하나가 비어있을 경우 방향대로 직진
        let chkDir = dir
        for(let i=0; i<4;i++){
            console.log(chkDir)
            if(chkDir<0){
                chkDir = 3
            }

            let [nextX, nextY] = [x+delta[chkDir][0], y+delta[chkDir][1]]
            //console.log(x,delta[chkDir][0], y, delta[chkDir][1])
            if(nextX>-1 && nextX<M&& nextY>-1 && nextY<N){
                if(!room[nextY][nextX]){
                    console.log(x,y,chkDir,'방향전환 후 직진')
                    return [nextX,nextY,chkDir]
                }
            }
                chkDir--

        }

        // 4방향중 모두 꽉 차 있을경우
        
        nextX = x - delta[dir][0]
        nextY = y - delta[dir][1]
        if(room[nextY][nextX] === 1){
            console.log(nextX,nextY,dir,'후진할 공간 없음')
            return [-1, -1, -1]
        }
        else{
            console.log(nextX,nextY,dir,'후진완료 ')
            return [nextX, nextY, dir]
        }
    }

}

let [x,y,z] = [startX,startY,startDir]
while(true){
    [x,y,z] = checkState(x,y,z)
    console.log(x,y,z)
    if(x < 0){
        console.log(room)
        console.log(cleanCnt)
        break;
    }
}




