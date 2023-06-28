#https://www.acmicpc.net/problem/2504

# string 받아 완전한 문장이면 true, 아니면 false 리턴
def isCorrect(str):
    stack = []
    for s in str:
        if s == "(":
            stack.append("(")
        elif s == ")":
            if len(stack) == 0 : return False
            if(stack[-1] != "("): return False
            stack.pop()
        elif s == "[":
            stack.append("[")
        elif s == "]":
            if len(stack) == 0 : return False
            if(stack[-1] != "["): return False
            stack.pop()
    
    if len(stack) != 0:
        return False
    
    return True
    
    
# 완전한 괄호 string 받아 점수를 리턴
# ()() 같은 경우 덧셈, ([]) 같은 경우 곱셈
def chkValue(str):
    ret = 0
    tempstr = ""
    if str[0] == '(':
        val = 2
    elif str[0] == "[":
        val = 3
    
    if(len(str)==2):
        #print(str,"val", val)
        return val
    strcut = str[1:-1]
    for s in strcut:
        tempstr += s
        if(isCorrect(tempstr)):
            ret += chkValue(tempstr)
            tempstr = ""
    #print(str,"ret, val", ret, val)
    return ret*val


inp = input()
tempstr = ""
ans = 0

if not isCorrect(inp): print("0")
else:
    for s in inp:
        tempstr += s
        if(isCorrect(tempstr)):
            ans += chkValue(tempstr)
            tempstr = ""
    print(ans)