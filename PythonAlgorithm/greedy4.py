# 만들 수 없는 금액

n = int(input())
data = list(map(int, input().split()))
data.sort()
target = 1
for x in data:

    if target < x:
        break
    target += x
# 만들 수 없는 금액 출력
print(target)