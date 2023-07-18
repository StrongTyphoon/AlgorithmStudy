N = int(input())

storage = []
maxheight = -1
for i in range(N):
    idx, height = map(int, input().split(" "))
    storage.append((idx,height))
    
    if(height>maxheight): 
        maxheight = height
        maxindex = idx
storage.sort(key=lambda a : a[0])
print(storage)

ans = 0
isUp = True
nextMaxheight = 0
nextMaxidx = 0
for i, (idx, height) in enumerate(storage):
    print("idx, height",idx,height)
    if(idx == maxindex):
        isUp = False

        ans += maxheight
        nextMaxheight = 0
        nextMaxidx = 0
        for idx3, height3 in storage[i+1:]:
            if(nextMaxheight<height3):
                nextMaxheight = height3
                nextMaxidx = idx3
        print("idx는 maxheight, ans++", idx,maxheight)
        continue
    if(isUp):
        if(nextMaxidx != 0):
            if(idx<nextMaxidx):
                print("idx는 continue", idx)
                continue
        for idx2, height2 in storage[i+1:]:
            print("height, height2", height, height2)
            if(height<height2):        
                ans += (idx2-idx)*height
                nextMaxidx = idx2
                nextMaxheight = height2
                print("nextMaxidx,nextMaxheight",nextMaxidx,nextMaxheight)
                print("Up상태, idx, ans ++", idx, (idx2-idx)*height, idx, idx2, height)
                break
    else:
        if(nextMaxidx != 0):
            if(idx<nextMaxidx):
                print("idx는 continue", idx)
                continue
        for idx3, height3 in storage[i+1:]:
            if(nextMaxheight<height3):
                nextMaxheight = height3
                nextMaxidx = idx3
        ans += (nextMaxidx-idx)*nextMaxheight
        print("Down상태, idx, ans++, nextMaxidx, nextMaxheight", idx, (nextMaxidx-idx)*nextMaxheight, nextMaxidx, nextMaxheight)
        
print(ans)