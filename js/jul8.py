# Numerology
# Calculate Life Path from dates
# edgecase, for 11,22,33
def sumMoreThan10(num):
    if(num>9):
        count=0
        stringNum = str(num)
        for el in stringNum:
            newAdd = int(el)
            count = count + newAdd
    if(count>9 and not 0):
        sumMoreThan10(count)
    else:
        print(count)
sumMoreThan10('1977')

# python jul8.py
# take in the number
# change the number to string
# iterate thru every elemenet of the string
#     take the element string change back into a number
#     add to the sum variable
# spit out the sum variable
# and rename the sum as num if the number is greater than 9
