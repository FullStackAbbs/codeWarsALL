#Soul Number, Personality Number




#Completed LP Algo
#take in three numbers (month, day and year)
#(1) reduce the month to a single number
#(2) reduce the day to a single number
#(3) reduce the year to a single number

#(4) sum all the numbers and reduce to single number if the number is not 11,22,33
monReduced=0
dayReduced=0
count=0
def findLP(mon,day,year):
    def reduceMon(mon):
        num=mon
        if(num>9):
            stringNum = str(num)
            for el in stringNum:
                newAdd = int(el)
                count = count + newAdd
        if(count>9 and not 0):
            sumMoreThan10(count)
        else:
            print(count)
    # def reduceDay():
    #     num=day
    #     if(num>9):
    #         count=0
    #         stringNum = str(num)
    #         for el in stringNum:
    #             newAdd = int(el)
    #             count = count + newAdd
    #             if(count>9 and not 0):
    #                 sumMoreThan10(count)
    #             else:
    #                 print(count)
    # def reduceYear():
    #     num=year
    #     if(num>9):
    #         count=0
    #         stringNum = str(num)
    #         for el in stringNum:
    #             newAdd = int(el)
    #             count = count + newAdd
    #     if(count>9 and not 0):
    #         sumMoreThan10(count)
    #     else:
    #         print(count)
    # def sumNreduceAll():
    #     print(mon+day+year)
    reduceMon(mon)
    # reduceDay()
    # reduceYear()
findLP(1,3,1977)

# python jul9.py
