a = int(input())
res = []

for i in range(2, a+1):
    if a % i == 0:
        res.append(i)

print(res[0])
