"""
A string methods test
"""
import random
try:
    digits = input("How many digits do you want? ")
except Exception as e:
    print(e)
    print("You did not type a integer. Run the program again")
n = "1"
for i in range(0, int(digits)):
    n += "0"
n = int(n)
maxN = n-1
minN = n/10
num  = random.randint(minN,maxN)
print(num)
