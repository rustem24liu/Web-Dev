import math

a = int(input())
res = 0

for i in range(1, int(math.sqrt(a)) + 1):
    if a % i == 0:
        res += 2

if int(math.sqrt(a)) ** 2 == a:
    res -= 1

print(res)
