# 곱하기 혹은 더하기

queue = []
inp = input()

for i in inp:
    queue.append(int(i))

prev = queue.pop(0)
cnt = len(queue)
while(cnt > 0):         # for문으로 사용해도 되지만 내 맘 ^^
    next = queue.pop(0)
    prev = max(prev*next, prev+next)    # * 나 + 중 큰 값을 사용함
    cnt -= 1
    
print(prev)