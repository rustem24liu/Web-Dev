a = int(input())
res = []

for i in range(1, a+1):
    if a % i == 0:
        res.append(i)

for i in res:
    print(i)

