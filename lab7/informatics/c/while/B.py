N = int(input())
i = 2

while i*i <= N:
    if N%i != 0:
        i += 1
print(i)