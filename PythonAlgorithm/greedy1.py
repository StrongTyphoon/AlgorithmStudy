# 모험가 길드

n = int(input())
numlist = list(map(int,input().split(' ')))
numlist.sort()  # 받은 숫자를 정렬

anslis = []     # 정답 그룹을 2중 배열로 받음
li = []         # 한 그룹 리스트
max = 0         # 한 그룹에 있어야 하는 최소한의 인원

for i in range(n):
    max = numlist[i]    
    li.append(numlist[i])   
    if len(li) >= max:      # 그룹 내에 있어야 하는 최소인원을 넘었을 경우
        anslis.append(li)   # anslis 에 넣음
        li = []             # li 초기화
        
print(len(anslis))      