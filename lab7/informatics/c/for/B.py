a, b = int(input()), int(input())
c , d = int(input()), int(input())

for i in range(a, b+1):
    if i % d == c:
        print(i , end = " ")