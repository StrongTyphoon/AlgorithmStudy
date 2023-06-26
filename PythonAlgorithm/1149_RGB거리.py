#https://www.acmicpc.net/problem/1149
#집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다. 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.

# 1번 집의 색은 2번 집의 색과 같지 않아야 한다.
# N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
# i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.



# 6

# 30 19 5         
# 64 77 64        
# 15 19 97        
# 4 71 57
# 90 86 84
# 93 32 91
n = int(input())

dist = [0, 0, 0]
for i in range(n):
    weight = list(map(int, input().split()))
    nextdist = []
    nextdist.append(min(dist[1]+weight[0], dist[2]+weight[0]))
    nextdist.append(min(dist[0]+weight[1], dist[2]+weight[1]))
    nextdist.append(min(dist[0]+weight[2], dist[1]+weight[2]))
    dist = nextdist

print(min(dist))