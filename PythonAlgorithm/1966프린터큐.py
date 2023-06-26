from queue import Queue

N = int(input())

for i in range(N):
    n, m = map(int, input().split(" "))
    priority = list(map(int,input().split(" ")))
    queue = Queue(101)
    for j in range(n):
        queue.put([j,priority[j]])
    # queue.get()[0] 은 idx, queue.get()[1]은 중요도
    # print(n,m, numlst)
    priority.sort(reverse=True)
    cnt = 1
    #print(priority)
    
    for maxPrior in priority: #prior이 가장 높은 우선순위
        flag = False
        for k in range(queue.qsize()):        
            idx, prior = queue.get()
            #print(idx,prior)
            #print('prior','maxPrior',prior, maxPrior)
            if(prior == maxPrior):
                #print('idx',idx,'m',m)
                if(idx == m):
                    flag = True
                    print(cnt)
                    break 
                flag = True
                cnt += 1
                break
            
            else:
                queue.put([idx,prior])
            
        if(flag): continue
