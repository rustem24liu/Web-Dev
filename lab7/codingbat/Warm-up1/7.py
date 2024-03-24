def pos_neg(a, b, negative):
    if negative is True and not (a < 0 and b <0):
        return False
    elif negative is True and (a < 0 and b <0):
        return True
    else:
        return (a < 0 and b > 0) or (a > 0 and b < 0)


# Official Solution:
# def pos_neg(a, b, negative):
#   if negative:
#     return (a < 0 and b < 0)
#   else:
#     return ((a < 0 and b > 0) or (a > 0 and b < 0))