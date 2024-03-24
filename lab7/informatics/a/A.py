a, b = int(input()), int(input())


def hypotenuse(a, b) -> float:
    result = (a ** 2 + b ** 2) ** 0.5
    return result

res = hypotenuse(a, b)
print(res)