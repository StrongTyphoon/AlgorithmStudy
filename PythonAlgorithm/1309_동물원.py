# 1309번 동물원
# 우리가 2*N 배열에 사자를 배치하는 경우의 수가 몇 가지인지를 알아내는 프로그램을 작성해 주도록 하자. 사자를 한 마리도 배치하지 않는 경우도 하나의 경우의 수로 친다고 가정한다.
# 입략 : 첫째 줄에 우리의 크기 N(1≤N≤100,000)이 주어진다.
# 출력 : 첫째 줄에 사자를 배치하는 경우의 수를 9901로 나눈 나머지를 출력하여라.

# 재귀방법으로 했지만 n이 20개만 되도 확연히 느려진다. 재귀에서 반복문으로 바꿔보자
# def recursion(visited= [0,0],i = 0):
#     if i == n:
#         return 1
#     if visited[0] == 1:
#         return (recursion([0,1],i+1) + recursion([0,0],i+1))%9901
#     elif visited[1] == 1:
#         return (recursion([1,0],i+1)+recursion([0,0],i+1))%9901
#     else:
#         return (recursion([0,0],i+1)+recursion([1,0],i+1)+recursion([0,1],i+1))%9901
    

# n = int(input())
# print(recursion())

# value[0] 은 비어 둔 채로 끝나는 경우의 수
# value[1] 은 하나 사자가 들어 있는 채로 끝나는 경우의 수
n = int(input())
value = [1,2]

for _ in range(n-1):
    a=value[0]
    b=value[1]
    value[0]=(a+b)%9901
    value[1]=(2*a+b)%9901

print((value[0]+value[1])%9901)