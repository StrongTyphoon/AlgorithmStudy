# 무지의 먹방

def chkptr(length, ptr):
    pass

food_times = [3, 1, 2]
length = len(food_times)
ptr = 0
k = int(input("몇 초? : "))

for _ in range(k):
    if food_times[ptr] == 0:
        chkptr
    food_times[ptr] -= 1
    