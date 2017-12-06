"""
Lambda expressions
"""
def add(num1,num2):
    return num1+num2
multipliy = lambda num1,num2: num1*num2
even = lambda num: num%2 == 0
print(add(10,10))
print(multipliy(10,10))
print(even(57))
