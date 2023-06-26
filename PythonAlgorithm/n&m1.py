# dfs의 가지치기를 이용하자 n 은 숫자 개수, m 은 depth

n, m = map(int,input().split(' '))

s = []

def dfs():
    if len(s) == m:
        print(' '.join(map(str,s)))
        return
    
    for i in range(1,n+1):
        s.append(i)
        dfs()
        s.pop()
            
dfs()