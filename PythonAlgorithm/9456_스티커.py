# 9465번 스티커 https://www.acmicpc.net/problem/9465
# 스티커 한 장을 떼면, 그 스티커와 변을 공유하는 스티커는 모두 찢어져서 사용할 수 없게 된다. 즉, 뗀 스티커의 왼쪽, 오른쪽, 위, 아래에 있는 스티커는 사용할 수 없게 된다.
# 입력 : 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스의 첫째 줄에는 n (1 ≤ n ≤ 100,000)이 주어진다. 다음 두 줄에는 n개의 정수가 주어지며, 각 정수는 그 위치에 해당하는 스티커의 점수이다. 연속하는 두 정수 사이에는 빈 칸이 하나 있다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다. 
# 출력 : 각 테스트 케이스 마다, 2n개의 스티커 중에서 두 변을 공유하지 않는 스티커 점수의 최댓값을 출력한다.
# 1149_RGB거리와 다른 점은 아무 것도 선택하지 않는 것이 등장할 수 있다는 점 
# 근데 두칸 비우는 건 의미가 없음 무조건 한칸 비우는 건 경우의 수를 늘릴 수 있는데
# 위에거 선택 or 아래거 선택 or 선택 안함
total = int(input())

for _ in range(total):
    n = int(input())
    lst1= list(map(int,input().split()))
    lst2= list(map(int,input().split()))
    
    sumbe = [0,0]
    sum = [0,0]
    for i in range(n):
        sumtemp = [max(sum[1],sumbe[1])+lst1[i], max(sum[0],sumbe[0])+lst2[i]]
        sumbe = sum
        sum = sumtemp
    print(max(sum))
        
        
        
#50 50 100 X 60

#10 40 10 50 100 X 80