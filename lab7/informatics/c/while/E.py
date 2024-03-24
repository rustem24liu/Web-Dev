n = int(input())
i = 0
res = []
while i < n:
    if 2**i >=n:
        res.append(i)
    i += 1
print(res[0])