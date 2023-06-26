N,M,B = map(int, input().split(" "))
block = [list(map(int,input().split(" "))) for _ in range(N)]

#print(N,M,B,block)

INF = 2*12500*256

ans = []
mintime = INF
minH = 256
maxH = 0

for i in range(N):
    for j in range(M):
        if(minH > block[i][j]): minH = block[i][j] 
        if(maxH < block[i][j]): maxH = block[i][j]

def isAllSame(block):
    temp = block[0][0]
    for i in range(N):
        for j in range(M):
            if(block[i][j] != temp):
                return False
    return True        

def makeSameHeight(block, height, inven):
    time = 0

    for i in range(N):
        for j in range(M):
            if(block[i][j]<height):
                diff = height-block[i][j]
                inven -= diff
                time += diff

            elif block[i][j]>height:
                diff = block[i][j]-height
                inven += diff
                time += 2*diff
            
            if(inven < 0): return -1
    return time
        
if(isAllSame(block)):
    print(0,block[0][0])
else:    
    for i in range(minH, maxH+1):
        ret = makeSameHeight(block, i ,B)
        if(ret >= 0):
            if(mintime>ret): 
                ans = []
                mintime = ret
                ans.append(i)
            elif(mintime == ret):
                ans.append(i)
    print(mintime, max(ans))



