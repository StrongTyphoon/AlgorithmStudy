class PersonalizedSet:
    def __init__(self):
        self.set = []
    
    def add(self,x):
        if(not x in self.set):
            self.set.append(x)
    
    def remove(self, x):
        for idx, val in enumerate(self.set):
            if(x==val):
                self.set.pop(idx)
    
    def check(self, x):
        if(x in self.set):
            return True
        return False
    
    
    def toggle(self, x):
        if(self.check(x)):
            self.remove(x)
            return
        self.add(x)
        
    def all(self):
        self.set = []
        for i in range(1,21):
            self.set.append(i)
            
    def empty(self):
        self.set = []
        
    def __str__(self):
        return str(self.set)

s = PersonalizedSet()

N = int(input())

for i in range(N):
    op = input().split(" ")
    if(op[0] == "add"):
        s.add(int(op[1]))
    elif(op[0] == "check"):
        if(s.check(int(op[1]))): print(1)
        else: print(0)
    elif(op[0] == "remove"):
        s.remove(int(op[1])) 
    elif(op[0] == "toggle"):
        s.toggle(int(op[1]))
    elif(op[0] == "all"):
        s.all()
    elif(op[0] == "empty"):
        s.empty()

