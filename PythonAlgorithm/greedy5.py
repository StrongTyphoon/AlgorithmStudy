# 볼링공 고르기
# 문제가 뭔지 잘 모르겠지만 서로 같은 무게만 안걸리면 될듯

def nCr(n,r):
    return fact(n)/fact(r)/fact(n-r)

def fact(n):
    ret = 1
    for i in range(1,n+1):
        ret *= i
        
    return ret

n, m = map(int,input().split(' '))
numli = list(map(int,input().split(' ')))
numli.sort()
ans = nCr(n,2)

cnt = 0
temp = numli[0]

for i in numli:
    if temp == i:
        cnt += 1
    else:
        if cnt >= 2:
            ans -= nCr(cnt,2)
        cnt = 1
    temp = i
if cnt >= 2:
    ans -= nCr(cnt,2)
    
print(int(ans))