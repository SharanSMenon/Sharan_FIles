def sequence(n):
    lis = [n]
    while lis[-1] != 1:
        num = None
        if lis[-1]%2 == 1:
          num = ((lis[-1]) * 3) + 1;
        else:
          num = (lis[-1])/2;
        lis.append(int(num))
    return lis
seq = sequence(55)
print("Numbers")
print(seq)
print("Length")
print(len(seq))
