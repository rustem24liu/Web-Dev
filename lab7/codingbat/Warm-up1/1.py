def sleep_in(weekday, vacation):
    if vacation == True:
        return True
    else:
        if weekday == True:
            return False
        else:
            return True

# def sleep_in(weekday, vacation):
#   if not weekday or vacation:
#     return True
#   else:
#     return False
#   # This can be shortened to: return(not weekday or vacation)