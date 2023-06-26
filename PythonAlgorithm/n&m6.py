# dfs의 가지치기를 이용하자 n 은 숫자 개수, m 은 depth

n, m = map(int,input().split(' '))
numlst = list(map(int,input().split(' ')))
numlst.sort()
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
    
    for i in range(n):
        num = numlst[i]
        if len(s) != 0:    
            if s[-1]>=num:
                continue
    
        s.append(num)
        dfs()
        s.pop()
            
dfs()