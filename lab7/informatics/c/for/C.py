from math import sqrt
import math

a, b = int(input()), int(input())

for i in range(a, b + 1):
    if ((sqrt(i * 1.0)) == int(sqrt(i))):
        print(i)
