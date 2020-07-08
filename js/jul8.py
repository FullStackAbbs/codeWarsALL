# Numerology
# Calculate Life Path from dates
# edgecase, for 11,22,33
def sumMoreThan10(num):
    if(num>9): #add master number edgecases
        newNum=0
        love=0
        stringNum = str(num)
        addList=[]
        for el in stringNum:
            newAdd = int(el)
            addList.append(newAdd)
        newNum = sum(addList)
    if(newNum>9):
        sumMoreThan10(newNum)
    else:
        print(newNum)
res = sumMoreThan10('1977')
print(res)
# python jul8.py
# take in the number
# change the number to string
# iterate thru every elemenet of the string
#     take the element string change back into a number
#     add to the sum variable
# spit out the sum variable
# and rename the sum as num if the number is greater than 9
