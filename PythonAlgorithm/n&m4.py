# dfs의 가지치기를 이용하자 n 은 숫자 개수, m 은 depth

n, m = map(int,input().split(' '))

s = []
def chkStackTop():  
    if len(s) == 0:
        return -1
    else:
        return s[-1]

def dfs():
    if len(s) == m:
        print(' '.join(map(str,s)))
        return
    
    for i in range(1,n+1):
        if i < chkStackTop():          # 이전에 넣은 값 보다 낮으면 가지치기(중복 제거)
            continue
        else:
            s.append(i)
            dfs()
            s.pop()
            
dfs()