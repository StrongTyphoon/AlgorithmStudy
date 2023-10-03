/* 
N 은 3 ~ 5000
각 수는 -1,000,000,000 ~ 1,000,000,000

전 탐색은 무조건 시간초과
NC3 * N 만큼의 시간복잡도 => N * N-1 * N-2 * N => 5000**4 = 25,000,000 * 25,000,000 

그럼 이진탐색 쓰자 (1,000,000,000의 큰 숫자)

1. 세 용액의 합으로 정렬이 필요
- 각 용액의 정렬이 세 용액의 합의 정렬 상태를 보장 X
[-97 -6 -2 -1 98]
-97 -6 -2 = -105
-97 -6 -1 = -97
-97 -6 98 = -5
-6 -2 -1 = -9
-6 -2 98 
-2 6 98


*/